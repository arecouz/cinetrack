// DisplaySearch.js
import { useNavigate } from 'react-router-dom';
import MovieRating from './MovieRating';

const DisplaySearch = ({ searchResults, setQuery }) => {
  const navigate = useNavigate();

  if (!searchResults || searchResults.length === 0) {
    return <p className="text-gray-500 ml-8 mt-3">No results</p>;
  }

  const filteredResults = searchResults.filter((result) => result.poster_path);

  if (filteredResults.length === 0) {
    return <p className="text-gray-500">No results with images found</p>;
  }

  const handleClick = (movie) => {
    const searchQuery = movie.title
    setQuery(searchQuery)
    navigate(`/search/${movie.id}`, { state: { movie, searchQuery } });
  };

  const getTitleClass = (title) => {
    const length = title.length;
    if (length > 40) {
      return 'text-lg md:text-xl';
    } else if (length > 30) {
      return 'text-xl md:text-2xl';
    } else if (length > 20) {
      return 'text-2xl md:text-3xl';
    }
    return 'text-3xl md:text-4xl';
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m3">
      {filteredResults.map((result) => (
        <div
          key={result.id}
          onClick={() => handleClick(result)}
          className="border-8 p-4 shadow-sm cursor-pointer hover:border-yellow-400 flex flex-col justify-between h-full"
        >
          <h2
            className={`font-bebas ${getTitleClass(
              result.title
            )} text-center mb-4`}
          >
            {result.title}
          </h2>
          <div className="flex flex-col items-center">
            <img
              src={
                result.poster_path
                  ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
                  : 'https://via.placeholder.com/100x150?text=No+Image'
              }
              alt={result.title}
              className="max-w-full h-58 object-cover rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplaySearch;
