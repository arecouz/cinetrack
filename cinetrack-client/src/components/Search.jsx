import { useEffect, useRef } from 'react';
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
      <Command>
        <CommandInput 
          ref={inputRef}
          placeholder="Search for a movie" 
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Inception</CommandItem>
            <CommandItem>Emoji Movie</CommandItem>
            <CommandItem>King Kong</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </div>
  );
};

export default Search;