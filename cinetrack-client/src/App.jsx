import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
import DisplayMovie from './components/DisplayMovie';
import MyMovies from './components/MyMovies';
import Stats from './components/Stats';
import AuthForm from './components/AuthForm';
import  LogOut  from './components/LogOut'

const App = () => {
  const displayMovieRef = useRef(null);
  const [user, setUser] = useState(null); // State to hold user information

  useEffect(() => {
    const localUser = window.localStorage.getItem('user');
    if (localUser) {
      const user = JSON.parse(localUser);
      setUser(user);
    }
  }, []);

  const scrollToSection = (section) => {
    if (displayMovieRef.current) {
      displayMovieRef.current.scrollToSection(section);
    }
  };

  // Check user authentication and redirect to /login if user is null
  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="*" element={<AuthForm />} />
        </Routes>
      </Router>
    );
  }

  // If the user is authenticated, render the main app
  return (
    <Router>
      <div className="flex h-screen w-full overflow-hidden">
        <div className="flex-none">
          <Sidebar scrollToSection={scrollToSection} />
        </div>
        <main className="flex-1 overflow-auto">
          <div className="xl:p-5 lg:p-4 md:p-3 sm:p-0">
            <Routes>
              <Route path="/" element={<Navigate to="/search" replace />} />
              <Route path="/search" element={<Search />} />
              <Route
                path="/search/:id"
                element={<DisplayMovie ref={displayMovieRef} />}
              />
              <Route path="/my-movies" element={<MyMovies />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/login" element={<AuthForm setUser={setUser} />} />
              <Route path='/logout' element={<LogOut setUser={setUser} />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
