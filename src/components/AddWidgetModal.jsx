import React from 'react';
import { useState, useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';

const AddWidgetModal = () => {
    const { categories, addWidget } = useContext(WidgetContext);
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      content: '',
      category: categories[0]?.name || ''
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addWidget(formData.category, {
        id: Date.now(),
        name: formData.name,
        content: formData.content
      });
      // setIsOpen(false);
    };
  
    return (
        <div>
             <>
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
       + Add Widget
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Widget</h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Widget Name"
                  className="w-full p-2 border rounded"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
                <textarea
                  placeholder="Widget Content"
                  className="w-full p-2 border rounded"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                />
                <select
                  className="w-full p-2 border rounded"
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  {categories.map(cat => (
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
        </div>
    );
};

export default AddWidgetModal;