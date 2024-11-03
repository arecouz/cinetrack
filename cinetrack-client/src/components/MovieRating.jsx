import { Star } from 'lucide-react';
import { useState } from 'react';
import { postToMyMovies } from '@/services/myMovies';
import { useToast } from '@/hooks/use-toast';

const MovieRating = ({ movie }) => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (star) => {
    const userPreParse = localStorage.getItem('user');
    const user = JSON.parse(userPreParse);
    const token = user.token;
    setRating(star);
    try {
      const myMovie = {
        title: movie.title,
        date: new Date(),
        poster_path: movie.poster_path,
        release_date: movie.release_date,
        overview: movie.overview,
        rating: star,
      };

      postToMyMovies(myMovie, token);
      toast({
        title: movie.title,
        description: 'added to MyMovies',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-row gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleClick(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="focus:outline-none transition-colors duration-200"
        >
          <Star
            className={`w-6 h-6 ${
              star <= (hover || rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'fill-transparent text-gray-300'
            }`}
          />
        </button>
      ))}
      {rating > 0 && (
        <span className="ml-2 text-sm text-gray-600">
          {rating} star{rating !== 1 ? 's' : ''}
        </span>
      )}
    </div>
  );
};

export default MovieRating;
