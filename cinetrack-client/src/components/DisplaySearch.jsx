import React from 'react';
import MovieRating from './MovieRating';

const DisplaySearch = ({ searchResults }) => {
  if (!searchResults || searchResults.length === 0) {
    return <p className="text-gray-500">No results found</p>;
  }

  const filteredResults = searchResults.filter((result) => result.poster_path);

  if (filteredResults.length === 0) {
    return <p className="text-gray-500">No results with images found</p>;
  }

  const handleClick = (movie) => {
    console.log('Movie clicked:', movie);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 m-8">
      {filteredResults.map((result) => (
        <div
          key={result.id}
          onClick={() => handleClick(result)}
          className="border-8 p-4 shadow-sm cursor-pointer hover:border-yellow-400 flex flex-col justify-between h-full" // Flexbox and full height
        >
          <h2 className="font-bebas text-3xl md:text-4xl text-center p-3 font-semibold text-gray-800"> {/* Adjusted font sizes */}
            {result.title}
          </h2>
          <div className="flex flex-col items-center"> {/* Center align the content */}
            <img
              src={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                  : 'https://via.placeholder.com/100x150?text=No+Image'
              }
              alt={result.title}
              className="max-w-full h-58 object-cover rounded-md" 
            />
            <MovieRating />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplaySearch;
