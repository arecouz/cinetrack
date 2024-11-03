import { useNavigate } from 'react-router-dom';
import FixedRating from './FixedRating';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DatePicker } from './DatePicker';
import MovieRating from './MovieRating';
import { Button } from './ui/button';

const DisplaySearch = ({
  searchResults,
  deletable = false,
  reversed = false,
}) => {
  const navigate = useNavigate();

  if (!searchResults || searchResults.length === 0) {
    return <p className="text-gray-500 ml-9">No results</p>;
  }

  const filteredResults = searchResults.filter((result) => result.poster_path);
  if (reversed) {
    filteredResults.reverse();
  }

  if (filteredResults.length === 0) {
    return <p className="text-gray-500">No results found</p>;
  }

  const handleClick = (movie) => {
    if (!deletable) {
      const searchQuery = movie.title;
      navigate(`/search/${movie.id}`, { state: { movie, searchQuery } });
    } else {
      console.log('deletME');
    }
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 m-3">
      {filteredResults.map((result) => (
        <div key={result.id}>
          <Dialog>
            <DialogTrigger asChild>
              <div
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
                    alt={result.title || 'No Image Available'}
                    className="max-w-full h-58 object-cover rounded-md"
                  />
                  {result.date && (
                    <p className="font-bebas text-4xl mt-3">
                      {result.date.slice(0, 10)}
                    </p>
                  )}
                  {result.rating && <FixedRating rating={result.rating} />}
                </div>
              </div>
            </DialogTrigger>
            {deletable && (
              <DialogContent className="flex flex-col items-center justify-center text-center">
                <DialogHeader>
                  <DialogTitle className="font-bebas text-6xl text-center">
                    {result.title}
                  </DialogTitle>
                  <DialogDescription className="font-roboto">
                    Edit the entry? Change the date and/or your rating.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex flex-col items-center gap-4">
                  <div className="flex flex-col items-center">
                    <DatePicker
                      label={'Change the date?'}
                      defaultDate={result.date}
                    />
                    <MovieRating
                      submitToMyMovies={false}
                      initialRating={result.rating}
                    />
                    <Button className="mt-7">submit </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            )}
          </Dialog>
        </div>
      ))}
    </div>
  );
};

export default DisplaySearch;
