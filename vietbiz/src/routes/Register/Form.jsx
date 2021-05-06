import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import '../../assets/stylesheets/Login.css';
import axios from 'axios';
import { login, loginErrorHandler } from '../../utils/auth/login';
import { registerInfoHandler } from '../../utils/auth/register';

export default function Form() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRedirect, setRedirect] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const errorMsgStyle = {
        color: 'red',
        display: errorMsg === '' ? 'none' : 'block'
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const user = {firstname, lastname, username, password, phone, email, address, postalCode};
        const { error } = registerInfoHandler(user);
        if(error) {
            errorMsg(error);
            return;
        }
        axios.post("/api/user/register", user)
            .then(res => {
                login(res.data);
                setRedirect(true);
            }).catch((err) => {
                console.error(err);
                loginErrorHandler(err, setErrorMsg);
            })
    }

    return (
        <div className="container-fluid register-form-wrapper">
            {isRedirect ? <Redirect to='/' /> : ""}
            <div style={errorMsgStyle}>
                <div aria-live="polite" aria-atomic="true" style={{position: "relative", minHeight: 200}}>
                    <div className={`toast ${ errorMsg === '' ?'hide' : 'show'}`} style={{position: "absolute", top: 50, right: 50}}>
                        <div className="toast-body">
                            {errorMsg || ""}
                        </div>
                    </div>
                </div>
            </div>
            <div className="register-form-content">
                <h2>Register your account</h2>
                <br />
                <form onSubmit={(e) => onSubmitHandler(e)}>
                    <div className="mb-3 row">
                        <div className="col">
                            <label htmlFor="firstname" className="form-label">First name</label>
                            <input type="text" className="form-control" id="firstname" aria-describedby="firstname" onChange={(e) => setFirstname(e.target.value)} required placeholder="i.e John"/>
                        </div>
                        <div className="col">    
                            <label htmlFor="lastname" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="lastname" aria-describedby="lastname" onChange={(e) => setLastname(e.target.value)} placeholder="i.e Doe"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="username" onChange={(e) => setUsername(e.target.value)} required placeholder="i.e Johndoe123"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" id="password" className="form-control" aria-describedby="password" onChange={(e) => setPassword(e.target.value)} required placeholder="**********"/>
                        <div id="password" className="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="retype" className="form-label">Re-type Password</label>
                        <input type="password" id="retype" className="form-control" aria-describedby="retype" onChange={(e) => setPassword(e.target.value)} required placeholder="**********"/>
                    </div>
                    <div className="mb-3 row">
                        <div className="col">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="email" onChange={(e) => setEmail(e.target.value)} required placeholder="johndoe@example.com"/>
                        </div>
                        <div className="col">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="tel" className="form-control" id="phone" aria-describedby="phone" onChange={(e) => setPhone(e.target.value)} required placeholder="(xxx)-xxx-xxxx"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <div className="col">
                            <label htmlFor="address" className="form-label">Address</label>
                            <input type="text" className="form-control" id="address" aria-describedby="address" onChange={(e) => setAddress(e.target.value)} required placeholder="Your address"/>
                        </div>
                        <div className="col">
                            <label htmlFor="postalcode" className="form-label">Postal code</label>
                            <input type="text" className="form-control" id="postalcode" aria-describedby="postalcode" onChange={(e) => setPostalCode(e.target.value)} required placeholder="Your postal code"/>
                        </div>
                    </div>
                    <hr />
                    <div className="mb-3">
                        <button className="btn btn-primary container-fluid" type="submit">Register</button>
                    </div>
                    <p className="form-text">Already have an account? <Link to='/login'>Sign in here!</Link></p>
                </form>
            </div>
        </div>
    )
}
