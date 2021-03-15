import React from 'react'
import Form from './Form'
import '../../assets/stylesheets/Login.css';
export default function Login() {
    return (
        <div className="container-fluid login-wrapper">
            <div className="row">
                <div className="col col-8 login-svg-wrapper">
                    
                </div>
                <div className="col col-4">
                    <Form/>
                </div>
            </div>
        </div>
    )
}
