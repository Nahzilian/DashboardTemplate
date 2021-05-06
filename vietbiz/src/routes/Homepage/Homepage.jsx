import React from 'react'
import '../assets/stylesheets/Homepage.css';
import Navbar from './Navbar';
import Search from './Search';
export default function Homepage() {
    return (
        <>
            <Navbar />
            <div className="container-fluid search-wrapper">
                <div className="search-content">
                    <h1>Get matched with local pros for your next home project.</h1>
                    <h3>Quickly get quotes from verified and reviewed pros</h3>
                    <br/>
                    <Search />
                </div>
            </div>
        </>
    )
}
