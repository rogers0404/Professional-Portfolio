import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="my-1">
        <div className="d-flex justify-content-center">
            <div className="card text-center w-75 d-flex justify-content-center">
                <div className="card-header m-1 textFontColor font-weight-bold">Contact</div>
                <div className="card-body">

                <div className="card-deck textFontColor">                        
                    <div className="card">
                      <div className="card-body justify-content-left m-0 text-sm-left">
                          <form id="contact-form" onSubmit={handleSubmit}>
                              <div className="w-100 row m-0 textFontColor">
                                  <div className="w-25 small-text textFontColor" >
                                      <label htmlFor="name">Name </label>
                                  </div>
                                  <div className="w-75 pl-1">
                                    <input className="w-75" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                                  </div>                  
                              </div>
                              <div className="w-100 row m-0">
                                  <div className="w-25 small-text textFontColor">
                                      <label htmlFor="email">Email</label>
                                  </div>
                                  <div className="w-75 pl-1">
                                      <input className="w-75"  type="email" name="email" defaultValue={email} onBlur={handleChange} />
                                  </div>                                
                              </div>
                              <div className="w-100 row  m-0" style={{ color: '#14213d' }}>
                                  <div className="w-25 textFontColor">
                                      <label htmlFor="message">Message</label>
                                  </div>
                                  <div className="w-75 pl-1">
                                      <textarea className="w-75" name="message" rows="4" defaultValue={message} onBlur={handleChange} />
                                  </div>
                                </div>
                              {errorMessage && (
                                <div className="w-100 bg-primary textFontColor">
                                  <p className="error-text textFontColor font-weight-bold" >{errorMessage}</p>
                                </div>
                              )}
                              <button className="btn btn-primary" data-testid="button" type="submit">Submit</button>
                          </form>
                      </div>
                  </div>
                  <div className="card textFontColor">
                      <div className="card-body justify-content-left">
                        <div className="w-100 textFontColor">
                            <h1>Rogers Ramirez</h1>
                        </div>
                        <div className="w-100 textFontColor">
                            <p>Any questions? Let me know and I'll be happy to talk to you!</p>
                        </div>
                        <div className="w-100 textFontColor">
                            <p>email: <a href="mailto:rogers.ramirez2008@gmail.com">rogers.ramirez2008@gmail.com</a></p>
                            <p>cel: 407-955-6604</p>
                        </div>
                  </div>
                </div>
                </div>
              </div>
              </div>
        </div>

        
    </section>

  );
}

export default ContactForm;
