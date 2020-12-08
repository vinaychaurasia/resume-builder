import React from 'react';

function Contact() {
    return (
        <div className="contact">
            <div>
                <form>
                    <p>
                        <label>First Name
                        <input type="text" name="fname" required></input>
                        </label> 
                    </p>

                    <p>
                        <label>Last Name
                        <input type="text" name="lname"></input>
                        </label> 
                    </p>

                    <p>
                        <label>Professional Summary
                        <input type="text" name="summary" required></input>
                        </label> 
                    </p>

                    <p>
                        <label>Email
                        <input type="text" name="email" required></input>
                        </label> 
                    </p>

                    <p>
                        <label>Phone
                        <input type="tel" name="phone_number"></input>
                        </label>
                    </p>

                    <p>
                        <label>Profession
                        <input type="text" name="Profession" required></input>
                        </label> 
                    </p>

                    <p>
                        <label>Street
                        <input type="text" name="street" required></input>
                        </label> 
                    </p>

                    <p>
                        <label>City
                        <input type="text" name="city" required></input>
                        </label> 
                    </p>

                    <p>
                        <label>State
                        <input type="text" name="state"></input>
                        </label> 
                    </p>

                    <p>
                        <label>Country
                        <input type="text" name="country" required></input>
                        </label> 
                    </p>

                    <p>
                        <label>Pin Code
                        <input type="text" name="pinCode" required></input>
                        </label> 
                    </p>
                </form>
            </div>

        </div>
                )
            }
            
export default Contact;