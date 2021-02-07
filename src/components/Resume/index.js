import React from 'react';
function Resume() {
  return (
    <section className="my-1">
        <div className="d-flex justify-content-center">
            <div className="card text-center w-75">
                <div className="card-header m-1 textFontColor font-weight-bold">Resume</div>
                <div className="card-body justify-content-left">
                <a 
                  className="list-group-item list-group-item-action active text-white " 
                  href="https://drive.google.com/file/d/1NdfqOehhR4KH7YYGpMk7PSqL87CpKXwz/view?usp=sharing"
                  target="blank">
                    Download my Resume
                </a>
                <div className="card-deck textFontColor" >                        
                    <div className="card">
                      <div className="card-body justify-content-left">
                          <p className="card-text  m-1 text-justify textFontColor">
                              Front-End Proficiencies
                          </p>
                            <ul className="list-group textFontColor">
                                <li className="list-group-item">HTML</li>
                                <li className="list-group-item">CSS</li>
                                <li className="list-group-item">JavaScript</li>
                                <li className="list-group-item">JQuery</li>
                                <li className="list-group-item">Responsive Design</li>
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">Bootstrap</li>
                                <li className="list-group-item">CURB Foundation</li>
                                <li className="list-group-item">Chakra-UI</li>
                                <li className="list-group-item">Redux</li>
                            </ul>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body justify-content-left">
                            <p className="card-text m-1 text-justify textFontColor">
                              Back-End Proficiencies
                          </p>
                          <ul className="list-group textFontColor">
                                <li className="list-group-item">APIs</li>
                                <li className="list-group-item">Node.js</li>
                                <li className="list-group-item">Express.js</li>
                                <li className="list-group-item">MySQL, Sequelize</li>
                                <li className="list-group-item">MongoDB, Mogoose</li>
                            </ul>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Resume;
