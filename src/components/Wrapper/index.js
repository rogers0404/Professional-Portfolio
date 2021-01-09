import React from "react";

function Wrapper(props) {
  return (
    <section className="my-1">
        <div className="d-flex justify-content-center">
            <div className="card text-center w-75 d-flex justify-content-center">
                <div className="card-header text-dark m-1">Projects</div>
                <div className="card-body">
                    {/* Card for each project */}
                   {/*  <div className="row row-cols-1 row-cols-md-1 row-cols-sm-1 justify-content-center"> */}
                    <div className="card-deck">
                          {props.children}
                    </div>
                     {/* Card for each project */}
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Wrapper;
