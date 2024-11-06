import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchBar } from '@/components/ui/SearchBar';
import { searchMovies } from '@/services/movies';
import DisplaySearch from './DisplaySearch.jsx';

const Search = () => {
  const { state } = useLocation();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Focus on the input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Debounce effect to wait for user to stop typing before searching
  useEffect(() => {
    if (!query.trim()) {
      setSearchResult([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      setIsSearching(true);
      try {
        const response = await searchMovies(query);
        setSearchResult(response.results || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setSearchResult([]);
      } finally {
        setIsSearching(false);
      }
    }, 500); // Delay in milliseconds (500ms here)

    return () => clearTimeout(delayDebounceFn); // Cleanup debounce on effect re-run
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="">
        <form onSubmit={(e) => e.preventDefault()}> {/* Prevent form submission */}
          <SearchBar
            ref={inputRef}
            placeholder={state?.searchQuery || 'Search for a movie'}
            value={query}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <div className="flex-1 overflow-y-auto">
        {isSearching ? (
          <p></p> // Optional: loading indicator
        ) : (
          <DisplaySearch searchResults={searchResult} setQuery={setQuery} />
        )}
      </div>
    </div>
  );
};

export default Search;
