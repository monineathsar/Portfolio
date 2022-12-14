import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Project from './components/Project';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Project />;
    }
    if (currentPage === 'Contacts') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <header>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
    </header>
    <Project/>
    </>
  );
}

export default App;