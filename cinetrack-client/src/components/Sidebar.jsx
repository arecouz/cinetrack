import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ scrollToSection, setUser }) => {
  const location = useLocation();

  const menuItems = [
    { id: 'search', label: 'Search', path: '/search' },
    { id: 'myMovies', label: 'My Movies', path: '/my-movies' },
    { id: 'stats', label: 'Stats', path: '/stats' },
  ];

  const baseClassName =
    'block text-center font-bebas text-lg sm:text-2xl mt-1 sm:mt-5 mx-1 sm:m-5 hover:underline cursor-pointer';

    const handleLogOut = () => {
      setUser(null)
      window.localStorage.removeItem('user')
    }
  return (
    <div className="flex flex-col h-full">
      <Link to="/search" className="font-bebas text-2xl sm:text-4xl p-1 sm:p-2">
        CineStack
      </Link>
      <nav className="w-fit flex-grow">
        <div className="border-t-8 border-r-8 border-b-0 border-l-0 h-full flex flex-col">
          <div className={baseClassName} onClick={handleLogOut}>
            log out
          </div>
          {menuItems.map(({ id, label, path }) => (
            <Link
              key={id}
              to={path}
              className={`${baseClassName} ${
                location.pathname === path ? 'text-[hsl(var(--accent))]' : ''
              }`}
            >
              {label}
            </Link>
          ))}

          {/^\/search\/\d+$/.test(location.pathname) && (
            <div>
              <div
                className={baseClassName}
                onClick={() => scrollToSection('cast')}
              >
                cast
              </div>
              <div
                className={baseClassName}
                onClick={() => scrollToSection('crew')}
              >
                crew
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
