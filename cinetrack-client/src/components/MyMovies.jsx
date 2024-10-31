const MyMovies = ({ user }) => {
  console.log(user);
  return (
    <div>
      <div className="font-bebas text-6xl text-center p-6">{user.username}'s movies</div>
    </div>
  );
};

export default MyMovies;
