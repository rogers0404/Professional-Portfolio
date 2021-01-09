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
                <div className="card-header text-dark m-1">Contact</div>
                <div className="card-body">
                <div className="row">
                <div className="col-6">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="w-100">
                          <label htmlFor="name">Name: {" "}</label>
                          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                        </div>
                        <div className="w-100">
                          <label htmlFor="email">Email address: {" "}</label>
                          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div className="w-100">
                          <label htmlFor="message">Message: {" "}</label>
                          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                          <div className="w-100">
                            <p className="error-text text-danger">{errorMessage}</p>
                          </div>
                        )}
                        <button data-testid="button" type="submit">Submit</button>
                    </form>
                  </div>
                  <div className="col-6">
                        <div className="w-100">
                            <h1>Rogers Ramirez</h1>
                        </div>
                        <div className="w-100">
                            <p>Any questions? Let me know and I'll be happy to talk to you!</p>
                        </div>
                        <div className="w-100">
                            <p>email: <a href="mailto:rogers.ramirez2008@gmail.com">rogers.ramirez2008@gmail.com</a></p>
                            <p>cel: 407-955-6604</p>
                        </div>
                  </div>
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

export default ContactForm;
