import React from "react";

function Wrapper(props) {
  return (
    <section className="my-1">
        <div className="d-flex justify-content-center">
            <div className="card text-center w-75 d-flex justify-content-center">
                <div className="card-header m-1" style={{ color: '#14213d' }}>Projects</div>
                <div className="card-body">
                    {/* Card for each project */}
                    <div className="card-deck">
                          {props.children}
                    </div>
                     {/* Card for each project */}
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Wrapper;
