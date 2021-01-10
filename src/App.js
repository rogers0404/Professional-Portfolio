import React, {useState} from 'react';
import './App.css';
import HeaderPage from './components/HeaderPage';
import About from './components/About';
import Contact from './components/Contact'
import Resume from './components/Resume';
import FooterPage from './components/FooterPage';
import Wrapper from './components/Wrapper';
import projectsDB from "./projectsDB.json";
import Project from './components/Project';


function App() {

  
  const [currentPage, handlePageChange] = useState('About Me');



  const renderProjects = () => {
    return <Wrapper>
              {projectsDB.map(project => (
                <Project
                  id={project.id}
                  key={project.id}
                  name={project.name}
                  image={project.image}
                  github={project.github}
                  deploy={project.deploy}
                  technologies={project.technologies}
                />
              ))}
          </Wrapper>
  }
  const renderPage = () => {

    switch(currentPage){
      case 'Portfolio': return renderProjects()
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
            <FooterPage />
   
      </main>
    </div>
  );
}

export default App;
