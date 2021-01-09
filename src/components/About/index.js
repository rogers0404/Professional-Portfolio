import React from 'react';
import photo from '../../assets/photoProfileSmall.jpeg';
//import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-1">
        <div className="d-flex justify-content-center">
            <div className="card text-center w-75 d-flex justify-content-center">
                <div className="card-header text-dark m-1">About Me</div>
                <div className="card-body">
                    <img className="card-img-top m-1" src={photo} alt="Rogers" style={{width: "10%"}}/>
                    <div className="d-flex justify-content-left">
                      <p className="card-text text-dark m-1 text-justify">
                          Full Stack Web Developer and Instrumentation Engineer with experience in Oil and Gas Industry. 
                          Certificate in full stack web developer from University of Central Florida. 
                          Skills in web technologies such as JavaScript, CSS, Git, Agile development and strengths in working under pressure, 
                          well-organized, collaborative, teamwork and detail-oriented. Excited to develop Web Sites bring me to face the problem 
                          with passion and dealing with the deadline. All those aptitudes guided me to accomplish every project I worked on. 
                          For these reasons, it would be helpful for any web developer team
                      </p>
                    </div>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default About;
