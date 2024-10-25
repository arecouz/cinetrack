import { useEffect, useRef } from 'react';
import { SearchBar } from '@/components/ui/SearchBar';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';

const Search = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when component mounts
    inputRef.current?.focus();
  }, []);

  return (
    <div className="flex">
      <SearchBar ref={inputRef} placeholder="Search for a movie..." />
    </div>
  );
};

export default Search;
