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

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query.trim()) return;

    try {
      const response = await searchMovies(query);
      setSearchResult(response.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setSearchResult([]);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="">
        <form onSubmit={handleSubmit}>
          <SearchBar
            ref={inputRef}
            placeholder={state?.searchQuery || 'Search for a movie'}
            value={query}
            onChange={handleInputChange}
          />
    
        </form>
      </div>
      <div className="flex-1 overflow-y-auto">
        <DisplaySearch searchResults={searchResult} setQuery={setQuery} />
      </div>
    </div>
  );
};

export default Search;
