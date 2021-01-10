import React from 'react';
import githubImage from "../../assets/GitHub.png"

function Project(props) {

      /*  */
  return (
      <div className="col-sm-6 row-cols-1 row-cols-md-1 row-cols-sm-1 w-100">
        <div className="card w-100 m-1">
            <a className="card-link textFontColor"   
                href={props.deploy} 
                alt={props.name} target="blank" 
                title="Deployment">
                    <img className="card-img-top" src={props.image} alt={props.name}/>
            </a>
            <div className="card-body d-flex align-items-center justify-content-center">
                    <div className="w-100 row m-0 textFontColor">
                        <div className="w-75 small-text" >
                            <h5 className="card-title textFontColor">
                                <a className="card-link textFontColor" 
                                    href={props.deploy} 
                                    alt={props.name} 
                                    target="blank" 
                                    title="Deployment">
                                        {props.name}
                                </a>
                            </h5>
                        </div>
                        <div className="w-25 pl-1">
                            <a className="card-link " href={props.github} alt={props.name} target="blank" title="Github repo">
                                <img alt={props.name} src={githubImage} style={{ width:`55%`} }/>
                            </a>
                        </div>                  
                    </div>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item small-text font-weight-bold textFontColor">{props.technologies}</li>
            </ul>
        </div>
    </div> 

  );
}

export default Project;
