import React from 'react';
import NavBar from '../NavBar';
//import About from '../About';
function HeaderPage(props) {

  return (
    <header className="headerImage">
            {/* <h1 id="header" >Rogers</h1> */}
            <NavBar currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
    
    </header>
  );
}

export default HeaderPage;