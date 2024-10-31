import * as React from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const SearchBar = React.forwardRef(
  ({ className, type = 'text', value, onChange, onSubmit, ...props }, ref) => {
    return (
      <div className="flex items-center border-b px-3 mb-4" cmdk-input-wrapper="">
        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <input
          className={cn(
            'flex h-11 w-full rounded-md bg-transparent py-3 font-bebas text-2xl outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
          {...props}
        />
      </div>
    );
  }
);
SearchBar.displayName = 'SearchBar';

export { SearchBar };
