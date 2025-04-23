import React from 'react';
import { useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';
import Widget from './Widget';

const CategorySection = () => {
  const { categories, searchTerm, removeWidget } = useContext(WidgetContext);

  const handleRemoveAll = (categoryName, widgets) => {
    if (confirm(`Remove all ${widgets.length} widgets from ${categoryName}?`)) {
      widgets.forEach(w => removeWidget(categoryName, w.id));
    }
  };
  return (
    <div>
      <div className="space-y-8">
      {categories.map(category => (
        <div key={category.name} className="border p-4 rounded-lg bg-white shadow-sm">
          {/* Category Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
            <div className="flex items-baseline gap-2">
              <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>

              <button 
                onClick={() => handleRemoveAll(category.name, category.widgets)}
                className="text-xs text-red-500 hover:text-red-700 hover:underline"
                aria-label={`Remove all widgets from ${category.name}`}
              >
                (Remove All)
              </button>
              
            </div>

            {/* Widget Toggle List */}
            {category.widgets.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs text-gray-500 mr-1">Toggle widgets:</span>
                {category.widgets.map(widget => (
                  <label 
                    key={widget.id} 
                    className="flex items-center text-sm bg-gray-100 px-2 py-1 rounded"
                  >
                    <input
                      type="checkbox"
                      checked
                      onChange={() => removeWidget(category.name, widget.id)}
                      className="mr-1.5 accent-blue-500"
                    />
                    <span className="truncate max-w-[120px]">{widget.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Widget Grid */}
          {category.widgets.filter(w => 
            w.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.widgets
                .filter(widget => 
                  widget.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map(widget => (
                  <Widget 
                    key={widget.id} 
                    widget={widget} 
                    categoryName={category.name} 
                  />
                ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">
              {searchTerm 
                ? "No matching widgets found" 
                : "This category has no widgets"}
            </p>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default CategorySection;