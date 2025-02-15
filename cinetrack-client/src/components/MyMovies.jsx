import { useState, useEffect } from 'react';
import usersServices from '@/services/users';
import DisplaySearch from './DisplaySearch';

const MyMovies = ({ user }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  // Fetch the user info and movie data when the component mounts or when 'refresh' changes
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await usersServices.getUser(user.id);
        setUserInfo(response);
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserInfo();
  }, [user.id, refresh]);

  // Handle movie update by triggering a re-fetch
  const handleMovieUpdate = () => {
    setRefresh((prev) => !prev);
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div>
      <div className="font-bebas text-6xl text-center p-6">
        {user.username}'s movies
      </div>
      {userInfo && userInfo.movies.length > 0 ? (
        <div>
          <DisplaySearch
            searchResults={userInfo.movies}
            deletable={true}
            reversed={true}
            token={user.token}
            onMovieUpdate={handleMovieUpdate}
          />
        </div>
      ) : (
        <div>
          <p className="flex justify-center mt-9 text-lg font-roboto text-center">
            To add a movie, search for it and give it a rating!
          </p>
        </div>
      )}
    </div>
  );
};

export default MyMovies;
