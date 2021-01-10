import React, {useEffect} from 'react';

function NavBar(props) {
  const tabs = ['About Me', 'Porfolio', 'Contact', 'Resume'];

  useEffect(() => {
    document.title = props.currentPage;
  }, [props.currentPage]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-1 align-items-center">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

  {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <div className="w-50">
            <h1> Rogers</h1>
        </div> */}
        <div className="collapse navbar-collapse justify-content" id="navbarTogglerDemo01">
                <a className="navbar-brand w-50" href="/"  style={{ color: '#14213d' }}>Rogers</a>
                <ul className="navbar-nav  border-0 text-small-dark "  style={{ color: '#14213d' }}>
                    {tabs.map(tab => (
                      <li className="nav-item " key={tab}  style={{ color: '#14213d' }}>
                        <a
                          href={'#' + tab.split(' ')[0].toLowerCase()}
                          onClick={() => props.handlePageChange(tab)}
                          className={
                            props.currentPage === tab ? 'nav-link active ' : 'nav-link '
                          }
                        >
                          {tab}
                        </a>
                      </li>
                    ))}
                </ul>
            </div>
    </nav>

     
  );
}

export default NavBar;
