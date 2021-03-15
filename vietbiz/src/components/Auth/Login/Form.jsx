import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import '../../assets/stylesheets/Login.css';
import axios from 'axios';
import { login, loginErrorHandler } from '../../../utils/auth/login'

export default function Form() {
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
        axios.post("/api/login", { username, password })
            .then(res => {
                login(res.data);
                setRedirect(true);
            }).catch((err) => {
                console.error(err);
                loginErrorHandler(err, setErrorMsg);
            })
    }

    return (
        <div className="container-fluid form-wrapper">
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
            <div className="form-content">
                <h2>Login to your account</h2>
                <br />
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="username" onChange={(e) => setUsername(e.target.value)} />
                        <div id="username" className="form-text">We'll never share your information with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPassword5" className="form-label">Password</label>
                        <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={(e) => setPassword(e.target.value)} />
                        <div id="passwordHelpBlock" className="form-text">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>
                    </div>
                    <hr />
                    <p className="form-text">Doesn't have an account? <Link to='/register'>Sign up here!</Link></p>
                    <div className="mb-3">
                        <button className="btn btn-primary container-fluid" onClick={(e) => onSubmitHandler(e)}>Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
