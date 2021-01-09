import React from 'react';
import twitterImage from "../../assets/twitter.png";
import githubImage from "../../assets/GitHub.png";
import linkedinImage from "../../assets/linkedin.png";
import emailImage from "../../assets/email.png";
/* import twitter from "../../assets/twitter.png"; */
function FooterPage() {

  return (
    <footer className="footerImage">
        <div class="p-1 m-0 mw-100 d-flex justify-content-center">
          <div>
             <a className="text-white" href="https://github.com/rogers0404/" target="blank">
                <img className="img-fluid" src={githubImage} alt="Rogers"  style={{width: "8%"}}/>
            </a>
          </div>
          <div>
             <a className="text-white" href="https://twitter.com/rogersalberto" target="blank">
             <img className="img-fluid" src={twitterImage} alt="Rogers" style={{width: "8%"}}/>
            </a>
          </div>
          <div>
             <a className="text-white" href="https://www.linkedin.com/in/rogers-ramirez-496a66b6" target="blank">
             <img className="img-fluid" src={linkedinImage} alt="Rogers" style={{width: "8%"}}/>
            </a>
          </div>
          <div>
             <a className="text-white" href="mailto:rogers.ramirez2008@gmail.com" target="blank">
             <img className="img-fluid" src={emailImage} alt="Rogers" style={{width: "8%"}}/>
            </a>
          </div>
        </div>
    </footer>
  );
}

export default FooterPage;