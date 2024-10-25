const Sidebar = ({ selected, setSelected }) => {
  const menuItems = [
    { id: 'search', label: 'Search' },
    { id: 'myMovies', label: 'My Movies' },
    { id: 'stats', label: 'Stats' },
    {id: 'logOut', label: 'Log out'}
  ];

  const baseClassName = "text-center font-bebas text-2xl mt-5 m-5 hover:underline cursor-pointer";

  return (
    <div className="flex flex-col">
      <h1 className="font-bebas text-4xl p-2">CineStack</h1>
      <div className="w-fit h-screen">
        <div className="border-t-8 border-r-8 border-b-0 border-l-0 h-full">
          {menuItems.map(({ id, label }) => (
            <p
              key={id}
              className={`${baseClassName} ${
                selected === id ? 'text-[hsl(var(--accent))]' : ''
              }`}
              onClick={() => setSelected(id)}
            >
              {label}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;