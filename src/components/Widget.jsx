import React from 'react';
import { useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';

const Widget = ({ widget, categoryName }) => {
    const { removeWidget } = useContext(WidgetContext);
    return (
        <div>
             <div className="border p-4 rounded-lg relative">
      <button 
        onClick={() => removeWidget(categoryName, widget.id)}
        className="absolute top-2 right-2 text-red-500"
      >
        ×
      </button>
      <h3 className="font-bold">{widget.name}</h3>
      <p>{widget.content}</p>
    </div>
        </div>
    );
};

export default Widget;