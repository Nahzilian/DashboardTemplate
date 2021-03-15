import React from 'react'
import '../assets/stylesheets/Search.css'

export default function Search() {
    return (
        <>
            <div className="search-box-wrapper">
                <div className="search-box">
                    <div className="i-input-wrapper">
                        <i className="fas fa-search fa-lg"></i>
                        <input type="text" placeholder="Look for a service" aria-label="service" />
                    </div>
                    <div className="i-input-wrapper">
                        <i className="fas fa-map-marker-alt fa-lg"></i>
                        <input type="text" placeholder="Postal code" aria-label="location" />
                    </div>
                    <button className="btn get-quote">Get quotes</button>
                </div>
            </div>
        </>
    )
}
