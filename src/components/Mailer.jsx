
import React from 'react';
import emailjs from '@emailjs/browser';
import '../css/mail.css';
export const Mailer = () => {

  const sendEmail = (event) => {
  

    emailjs.sendForm('service_yk5tzan','template_ijbfgta',event.target,'vhQOSUShRD552osMc')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  return (
        <div className="email-container p-5">
            <div className='div-form'>
                <h1 className='title-form'>Contact Us</h1>
                <form className='form-mail' onSubmit={sendEmail}>
                    <label>Name:</label>
                    <input type="text" className='form-control my-3' name='user_name' />
                

                    <label>Email:</label>
                    <input type="email" className='form-control my-3' name='user_email' />
                    

                    <label>Message:</label>
                    <textarea name="user_message" className='form-control my-3' id="" cols="30" rows="5"></textarea>
                    <button className='btn btn-primary'>Send</button>
                </form>
            </div>
        </div>
  )
}

