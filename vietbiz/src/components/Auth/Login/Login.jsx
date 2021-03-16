import React from 'react'
import Form from './Form'
import Navbar from '../../Common/Navbar'
import '../../assets/stylesheets/Login.css';
export default function Login() {
    return (
        <>
            <Navbar/>
            <div className="container-fluid login-wrapper">
                <div className="row">
                    <div className="col col-6 login-svg-wrapper"/>
                    <div className="col col-6">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}
