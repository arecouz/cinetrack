import { useEffect, useRef, useState } from 'react';
import { SearchBar } from '@/components/ui/SearchBar';
import { searchMovies } from '@/services/movies';
import DisplaySearch from './DisplaySearch.jsx';

const Search = () => {
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
    console.log(`Searching: ${query}`);
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
            placeholder="Search for a movie"
            value={query}
            onChange={handleInputChange}
          />
        </form>
      </div>
      <div className="flex-1 overflow-y-auto">
        <DisplaySearch searchResults={searchResult} />
      </div>
    </div>
  );
};

export default Search;
