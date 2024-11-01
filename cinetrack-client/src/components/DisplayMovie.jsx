import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { getCredits } from '../services/movies';
import { useParams, useLocation } from 'react-router-dom';
import MovieRating from './MovieRating';
import Persons from './Persons';

const DisplayMovie = forwardRef((props, ref) => {
  const { id } = useParams();
  const { state } = useLocation();
  const movie = state.movie;
  const [credits, setCredits] = useState(null);

  // Refs for "Cast" and "Crew" sections
  const castRef = useRef(null);
  const crewRef = useRef(null);

  // Fetch movie credits when component mounts
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getCredits(id);
        setCredits(response || null);
      } catch (error) {
        console.error('Error fetching movie:', error);
        setCredits(null);
      }
    };

    fetchMovie();
  }, [id]);

  // Use imperative handle to expose the scrollToSection function
  useImperativeHandle(ref, () => ({
    scrollToSection: (section) => {
      if (section === 'cast' && castRef.current) {
        castRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'crew' && crewRef.current) {
        crewRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }));

  if (!credits) {
    return <p>Loading...</p>;
  }

  return (
    <div className="border-8 p-4 shadow-sm h-full w-full">
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col items-center">
          <div className="flex flex-col sm:flex-row bg-black items-center lg:p-7 xl:p-15">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : 'https://via.placeholder.com/100x150?text=No+Image'
              }
              alt={movie.title}
              className="hidden sm:block w-[40%] xl:p-14 rounded-md object-contain ml-9"
            />
            <div className="flex flex-col items-center justify-center">
              <div className="font-bebas text-7xl text-center text-white mt-12">
                {movie.title}
              </div>
              <div className="font-bebas text-3xl text-center text-white">
                {movie.release_date.split('-')[0]}
              </div>
              <div className="text-white flex italic text-center items-center justify-center p-3 xl:p-25">
                {movie.overview}
              </div>
              <div className="flex items-center justify-center mb-12">
                {/* Rating a movie adds it to the MyMovies section */}
                <MovieRating movie={movie}/>
              </div>
            </div>
          </div>

          {/* Cast Section */}
          <div className="font-bebas text-4xl mt-9">
            <div ref={castRef} className="flex text-accent">Cast</div>
          </div>
          <Persons credits={credits.cast} />

          {/* Crew Section */}
          <div className="flex font-bebas text-4xl mt-9 text-custom-red">
            <div ref={crewRef}>Crew</div>
          </div>
          <Persons credits={credits.crew} />
        </div>
      </div>
    </div>
  );
});

export default DisplayMovie;
