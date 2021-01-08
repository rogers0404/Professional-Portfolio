import React, {useState} from 'react';
import NavBar from '../NavBar/NavBar';
//import coverImageHeader from '../../assets/header-background.png';
function HeaderPage() {

    const [currentPage, handlePageChange] = useState('About');

 /*    const renderPage = () => {

      switch(currentPage){
        case 'Porfolio': return <Porfolio />
        case 'Contact': return <Contact />
        case 'Resume': return <Resume />
        default : return <About />
      }
    }; */
 
  return (
    <header className="headerImage">
        <div className="my-0">
            {/* <h1 id="header" >Rogers</h1> */}
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* <div>
                {
                    <div>{renderPage(currentPage)}</div>
                }
            </div> */}
        </div>      
    </header>
  );
}

export default HeaderPage;