import { Header } from "../../components/Header";
import { useState } from "react";
import './contact.css';

export function Contact(){
    const [sent,setSent] =useState(false);
    const handleSubmit =(e) =>{
        e.preventDefault();
        const form=e.target;
        const firstName=form.firstName.value;
        const lastName=form.lastName.value;
        const email=form.email.value;
        const message=form.message.value;

        const subject=`Portfolio Contact from ${firstName} ${lastName}`;
        const body =`
        Name:${firstName} ${lastName}
        Email: ${email}
        Message:
        ${message}`;
        const gmailURL=
        `https://mail.google.com/mail/?view=cm&fs=1&to=sharanyaanumula2007@gmail.com`+
        `&su=${encodeURIComponent(subject)}`+
        `&body=${encodeURIComponent(body)}`;
        window.open(gmailURL,"_blank");
        setSent(true);
        form.reset();
    };

    return(
        <>
            <Header/>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="name-fields">
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            type="text"
                            id="firstName"
                            name="firstName"   
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input 
                            type="text"
                            id="lastName"
                            name="lastName"   
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:<span>*</span></label>
                    <input 
                        type="email"
                        id="email"
                        name="email" 
                        required  
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Write a message:</label>
                    <textarea 
                        id="message"
                        name="message" 
                        rows="5"
                    ></textarea>
                </div>
                <button type="submit">Send Message <span className="send-icon">✈</span></button>
                {sent &&(
                    <p className="success-message">
                        Message sent successfully! Thank you for contacting me .💜
                    </p>
                )}
            </form>
        </>
    );
}