import React from 'react'
import Form from './Form'
import Navbar from '../../Common/Navbar'
import '../../assets/stylesheets/Register.css'

export default function Register() {
    return (
        <>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-6 register-svg-wrapper"/>
                    <div className="col col-6">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}
