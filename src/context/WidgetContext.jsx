import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import initialData from '../data/widgets.json';

export const WidgetContext = createContext();

export const WidgetProvider = ({ children }) => {
  // const [categories, setCategories] = useState(initialData.categories);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem('widgets')) || initialData.categories
  );
  
  // Save on update
  useEffect(() => {
    localStorage.setItem('widgets', JSON.stringify(categories));
  }, [categories]);

  const addWidget = (categoryName, widget) => {
    setCategories(prev => prev.map(cat => 
      cat.name === categoryName 
        ? { ...cat, widgets: [...cat.widgets, widget] } 
        : cat
    ));
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(prev => prev.map(cat => 
      cat.name === categoryName 
        ? { ...cat, widgets: cat.widgets.filter(w => w.id !== widgetId) } 
        : cat
    ));
  };

  return (
    <WidgetContext.Provider 
      value={{ categories, addWidget, removeWidget, searchTerm, setSearchTerm }}>
      {children}
    </WidgetContext.Provider>
  );
};

