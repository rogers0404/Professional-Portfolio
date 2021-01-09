import React from 'react';
import githubImage from "../../assets/GitHub.png"
//import img from "../../assets/projectImages/img1.png"

function Project(props) {

      /*  */
  return (
      <div className="col-6 row-cols-1 row-cols-md-1 row-cols-sm-1 justify-content-center">
        <div className="card">
            <img className="card-img-top" src={props.image} alt={props.name}/>
            <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title text-dark">
                    <a className="card-link text-success" href={props.deploy} alt={props.name}>
                      {props.name}
                    </a>
                </h5>
                <a className="card-link" href={props.github} alt={props.name}>
                    <img alt={props.name} src={githubImage} style={{ width:`15%`} }/>
                </a>
            </div>                        
            <ul className="list-group list-group-flush text-dark bg-transparent">
                <li className="list-group-item small-text">{props.technologies}</li>
            </ul>
        </div>
    </div> 

  );
}

export default Project;
