import React, { useState } from 'react';



function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)
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
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }


    return (
        <section>
            <h1 id="contact">Contact me</h1>
            <p className='contact-p'>Please reach out with any questions that you may have.</p>

            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                <div className='name-box'>
                    <label htmlFor="name">Name:</label>
                    <br></br>
                    <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                </div>

                {/* email input */}
                <div className='email-box'>
                    <label htmlFor="email">Email:</label>
                    <br></br>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                {/* message text area */}
                <div className='message-box'>
                    <label htmlFor="message">Message:</label>
                    <br></br>
                    <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}

                <button className='sub-btn' type="submit">Submit</button>
            </form>
        </section>
    )
    //JSX
}

export default ContactForm;