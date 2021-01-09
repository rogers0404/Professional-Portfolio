import React from 'react';
import githubImage from "../../assets/GitHub.png"

function Project(props) {

  return (
    <div className="col mb-5" >
        <div className="card" >
            <div className="card-body" style={{ backgroundImage:props.image}}>
                <h5 className="card-title text-danger">
                    <a className="text-dark" href={props.deploy} alt={props.name}>
                      {props.name}
                    </a>
                </h5>
                <a className="text-dark" href={props.github} alt={props.name}>
                    <img alt={props.name} src={githubImage} />
                </a>
            </div>                        
            <ul className="list-group list-group-flush text text-light">
                <li className="list-group-item bg-secondary">{props.technologies}</li>
            </ul>
        </div>
    </div>

  );
}

export default Project;
