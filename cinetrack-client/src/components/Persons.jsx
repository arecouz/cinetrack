import React from 'react';

const JOB_PRIORITY = {
  Director: 1,
  'Director of Photography': 2,
  Screenplay: 3,
  'Original Music Composer': 3,
  Producer: 4,
  'Executive Producer': 5,
  Casting: 6,
  'Art Direction': 7,
};

const Persons = ({ credits, title }) => {
  if (!credits || credits.length === 0) {
    return <p>No credits available</p>;
  }

  // Helper function to sort crew members by priority
  const sortByPriority = (a, b) => {
    const priorityA = JOB_PRIORITY[a.job] || Number.MAX_SAFE_INTEGER;
    const priorityB = JOB_PRIORITY[b.job] || Number.MAX_SAFE_INTEGER;
    return priorityA - priorityB;
  };

  const limitedCredits = credits; // .slice(0, 350);

  // Separate cast and crew
  const cast = limitedCredits.filter((person) => person.character);
  const crew = limitedCredits.filter((person) => !person.character);

  // Sort crew by priority
  const sortedCrew = crew.sort(sortByPriority);

  // Recombine and separate by profile presence
  const allSortedCredits = [...cast, ...sortedCrew];
  const withPhotos = allSortedCredits.filter((person) => person.profile_path);
  const withoutPhotos = allSortedCredits.filter(
    (person) => !person.profile_path
  );

  console.log('testing logging');

  return (
    <div className="w-full space-y-6">
      <h3 className="text-lg font-bold">{title}</h3>

      {/* People with profile photos */}
      {withPhotos.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
          {withPhotos.map((person) => (
            <div
              onClick={() => console.log('testing click')}
              className={`${
                person.character ? 'border-accent' : 'border-custom-red'
              } border-4 p-1 shadow-sm flex flex-col justify-between h-full`}
              key={person.credit_id}
            >
              <div className="flex-grow">
                <p className="font-semibold text-xl text-center">
                  {person.name}
                </p>
                {person.character ? (
                  <p className="font text-center">as {person.character}</p>
                ) : (
                  <p className="font text-center">{person.job}</p>
                )}
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="sm:w-26 lg:w-26 xl:w-40 object-cover"
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.title}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* People without profile photos */}
      {withoutPhotos.length > 0 && (
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Additional {title}</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
            {withoutPhotos.map((person) => (
              <div
                className={`${
                  person.character ? 'border-accent' : 'border-custom-red'
                } border-2 p-2 shadow-sm rounded-md`}
                key={person.credit_id}
              >
                <p className="font-semibold text-sm text-center">
                  {person.name}
                </p>
                {person.character ? (
                  <p className="text-sm text-center">as {person.character}</p>
                ) : (
                  <p className="text-sm text-center">{person.job}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Persons;
