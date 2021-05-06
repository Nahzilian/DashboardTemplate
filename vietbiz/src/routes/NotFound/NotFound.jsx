import React from 'react'
import Navbar from '../Homepage/Navbar';

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className="container-fluid search-wrapper">
                <div className="search-content">
                    <h1>404 Not Found</h1>
                    <h3>The page you are looking for does not exist!</h3>
                </div>
            </div>
        </>
    )
}
