import React from 'react';
import NavBar from '../NavBar';
function HeaderPage(props) {

  return (
    <header className="headerImage">
            <NavBar currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
    
    </header>
  );
}

export default HeaderPage;