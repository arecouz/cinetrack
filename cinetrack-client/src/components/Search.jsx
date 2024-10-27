import { useEffect, useRef, useState } from 'react';
import { SearchBar } from '@/components/ui/SearchBar';
import { searchMovies } from '@/services/movies';

const Search = () => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on search input on mount
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`searching: ${query}`)
    try {
      const response = await searchMovies(query);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <SearchBar
          ref={inputRef}
          placeholder="Search for a movie"
          value={query}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

export default Search;
