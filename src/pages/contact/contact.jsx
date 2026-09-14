import { Header } from "../../components/Header";

export function Contact(){
    return(
        <>
            <Header/>
            <div className="contact-form">
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
                <button type="submit">Send message</button>
            </div>
        </>
    );
}