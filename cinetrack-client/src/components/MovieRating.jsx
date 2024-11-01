import { Star } from 'lucide-react';
import { useState } from 'react';
import { postToMyMovies } from '@/services/myMovies';

const MovieRating = ({ movie }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (star) => {
    console.log('Mrating', movie);
    const userPreParse = localStorage.getItem('user');
    const user = JSON.parse(userPreParse);
    const token = user.token;
    setRating(star);
    try {
      const myMovie = {
        title: movie.title,
        date: new Date(),
        poster: movie.poster_path,
        rating: star,
      };
      console.log('delete me', myMovie);
      const response = postToMyMovies(myMovie, token);
      console.log(response);
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
