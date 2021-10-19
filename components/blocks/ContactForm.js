import React, { useState } from 'react';
import axios from 'axios';
import { ThemeContext } from '../theme';
import { invertedButtonColorClasses } from '../actions';
import { buttonColorClasses } from '../actions';
import { PrivacyPolicy } from '../unnamed/privacy';

const ContactForm = ({ data }) => {

  const theme = React.useContext(ThemeContext);
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    message: '',
    email: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        firstName: '',
        lastName: '',
        message: '',
        email: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/moqybzwn',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  const clickHandler = (e) => {
    console.log(e);  
  }

  return (
    <>
    <div className=" px-2 md:px-8 py-6 mt-4 w-full ">
     
      <form className="w-full" onSubmit={handleOnSubmit}>
              
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="firstName">
              First name
            </label>
          </div>
          <div className="md:w-2/3" >
            <input className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-purple-500  ${
              data.color === "primary"
                    ? `from-white to-gray-100`
                    : `text-gray-700`
                }`} id="firstName" type="text"     
             onChange={handleOnChange}
             required
             value={inputs.firstName}>
            </input>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="lastName">
              Last name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
             id="lastName" 
             type="text"
             required
             onChange={handleOnChange}
             value={inputs.lastName}>
            </input>
          </div>
        </div>

        
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="message">
              Message
            </label>
          </div>
          <div className="md:w-2/3">
            <textarea className="resize-none bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 " 
             id="message" 
             type="text"
             rows={3}
             required
             maxLength={200}
             onChange={handleOnChange}
             value={inputs.message}>
            </textarea>
          </div>
        </div>

        
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="message">
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
             id="email" 
             type="email"
             disabled={status.submitting}
             onChange={handleOnChange}
             value={inputs.email}>
            </input>
          </div>
        </div>
    <div className="md:flex md:items-center">
       <div className="md:w-1/3"></div>
         <div className="md:w-2/3">
         <button
                  className={`z-10 relative flex items-center px-7 py-3 font-semibold text-lg transition duration-150 ease-out  rounded transform focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 whitespace-nowrap ${
                    data.color === "primary"
                      ? invertedButtonColorClasses[theme.color]
                      : buttonColorClasses[theme.color]
                  }`}
                 type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
        </div>
      </div>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p className="mt-4">{status.info.msg}</p>}
      </form>
    </div>
    </>
  );
};

export default ContactForm;