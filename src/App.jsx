import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import Appointment from './pages/Appointment';
import Doctors from './pages/Doctors';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'treatments':
        return <Treatments setCurrentPage={setCurrentPage} />;
      case 'appointment':
        return <Appointment setCurrentPage={setCurrentPage} />;
      case 'doctors':
        return <Doctors setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'blog':
        return <Blog setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="bg-white text-gray-900">
        <Navbar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
        />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
