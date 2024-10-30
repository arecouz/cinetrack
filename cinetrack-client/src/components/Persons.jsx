// Persons.jsx
const Persons = ({ credits, title }) => {
  if (!credits || credits.length === 0) {
    return <p>No {title} available</p>;
  }

  const reducedCredits = credits.slice(0, 14);
  console.log(reducedCredits);

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3 m-1">
        {reducedCredits.map((person) => (
          <div
            className={
              person.character
                ? 'border-accent border-4  p-1 shadow-sm flex flex-col justify-between h-full '
                : 'border-custom-red border-4  p-1 shadow-sm flex flex-col justify-between h-full '
            }
            key={person.key}
          >
            <p className="font-semibold text-xl text-center">{person.name}</p>
            {person.character ? (
              <p className="font text-center">as {person.character}</p>
            ) : (
              <p className="font text-center">{person.job}</p>
            )}

            <img
              className="sm:w-26 lg:w-26 xl:w-40"
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
                  : 'https://placehold.co/400x600?text=No+Image&font=roboto'
              }
              alt={person.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Persons;
