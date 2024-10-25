import { useState } from 'react';

import AuthForm from './components/AuthForm';
import Sidebar from './components/Sidebar';
import Search from './components/Search';
import MyMovies from './components/MyMovies';
import Stats from './components/Stats';
import LogOut from './components/LogOut';
import LogIn from './components/LogIn';

const App = () => {
  const [selected, setSelected] = useState('search');

  const renderContent = () => {
    switch (selected) {
      case 'myMovies':
        return <MyMovies />;
      case 'stats':
        return <Stats />;
      case 'logOut':
        return <LogOut />;
      case 'search':
      default:
        return <Search />;
    }
  };

  return (
    <div className="flex flex-row">
      <Sidebar selected={selected} setSelected={setSelected} />
      <div className="p-2">{renderContent()}</div>
    </div>
  );
};

export default App;
