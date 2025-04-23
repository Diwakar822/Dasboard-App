import React from 'react';
import { useContext } from 'react';
import { WidgetContext } from '../context/WidgetContext';
const SearchBar = () => {
    const { setSearchTerm } = useContext(WidgetContext);
    return (
        <div>
             <input
      type="text"
      placeholder="Search widgets..."
      className="border p-2 rounded w-full max-w-md mb-4"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
        </div>
    );
};

export default SearchBar;