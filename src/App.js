/*dandru3218
03/10/2024*/

import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ImageComponent from './components/ImageComponent';

const App = () => {
  const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/ECPI-Seal.png/220px-ECPI-Seal.png';
  const [currentPage, setCurrentPage] = React.useState('home');
  return (
    <div>
      <nav>
        <button onClick={() => setCurrentPage('home')}>Home</button>
        <button onClick={() => setCurrentPage('about')}>About</button>
      </nav>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      <ImageComponent imageUrl={imageUrl} />
    </div>
  );
};

export default App;
