import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
import DisplayMovie from './components/DisplayMovie'
import MyMovies from './components/MyMovies';
import Stats from './components/Stats';
import LogOut from './components/LogOut';
import LogIn from './components/LogIn';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen w-full overflow-hidden">
        <div className="flex-none">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-auto">
          <div className="xl:p-5 lg:p-4 md:p-3 sm:p-0">
            <Routes>
              <Route path="/" element={<Navigate to="/search" replace />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search/:id" element={<DisplayMovie />} />
              <Route path="/my-movies" element={<MyMovies />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="/logout" element={<LogOut />} />
              <Route path="/login" element={<LogIn />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;