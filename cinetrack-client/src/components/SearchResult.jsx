import React from 'react';

const SearchResult = ({ title }) => {
  return (
    <div className="border border-gray-300 rounded-md p-4 mb-4 shadow-sm bg-white">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <div></div>
    </div>
  );
};

export default SearchResult;
