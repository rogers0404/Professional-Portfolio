//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import HeaderPage from './components/HeaderPage';
import About from './components/About';
import Contact from './components/Contact'
import Resume from './components/Resume';

function App() {

  
  const [currentPage, handlePageChange] = useState('About Me');

  const renderPage = () => {

    switch(currentPage){
      /* case 'Porfolio': return <Porfolio />*/
      case 'Contact': return <Contact />
      case 'Resume': return <Resume /> 
      default : return <About />
    }
  };


  return (
    <div>
      <main>
            <HeaderPage 
              currentPage={currentPage}
              handlePageChange= {handlePageChange}
               />
            {<div>
                {
                    <div>{renderPage(currentPage)}</div>
                }
            </div>}
   
      </main>
    </div>
  );
}

export default App;
