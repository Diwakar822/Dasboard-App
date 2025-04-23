import React from 'react';
import { WidgetProvider } from './context/WidgetContext';
import CategorySection from './components/CategorySection';
import AddWidgetModal from './components/AddWidgetModal';
import SearchBar from './components/SearchBar'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <WidgetProvider>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <SearchBar /> {/* Moved search to separate component */}
        <AddWidgetModal />
        <CategorySection />
      </div>
    </WidgetProvider>
    </div>
  );
};

export default App;