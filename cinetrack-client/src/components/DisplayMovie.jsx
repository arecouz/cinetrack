import { useState, useEffect } from 'react';
import { getCredits } from '../services/movies';
import { useParams, useLocation } from 'react-router-dom';
import MovieRating from './MovieRating';
import Persons from './Persons';
import { Separator } from '@radix-ui/react-select';

const DisplayMovie = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const movie = state.movie;
  const [credits, setCredits] = useState(null);

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

  if (!credits) {
    return <p>Loading...</p>;
  }

  return (
    <div className="border-8 p-4 shadow-sm h-full w-full">
      <div className="flex flex-col sm:flex-row ">
        <div className="flex flex-col items-center ">

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
                <MovieRating />
              </div>
            </div>
          </div>
          <div className="font-bebas text-4xl mt-9">
            <div className="flex text-accent">Cast</div>
          </div>
          <Persons credits={credits.cast} />
          <br></br>
          <div className="flex font-bebas text-4xl mt-9 text-custom-red">Crew</div>
          <Persons credits={credits.crew} />
        </div>
      </div>
    </div>
  );
};

export default DisplayMovie;
