import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function Page6() {
    const[message, setMessage] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        setMessage('Data Upload Successful')
    }
    
    return (
        <div>
        <header>
            <nav>
                <img
                    src="https://vectorseek.com/wp-content/uploads/2023/08/City-Of-Anaheim-Logo-Vector.svg-.png"
                    className="nav-logo"
                    alt="Salvation Army Logo"
                />
                <ul>
                    <li><a href="/">Entry/Exit Trends</a></li>
                    <li><a href="/page2">LOS Trends</a></li>
                    <li><a href="/page3">Age Trends</a></li>
                    <li><a href="/page4">Housing Trends</a></li>
                    <li><a href="/page5">Recidivism Trends</a></li>
                    <li><a href="/page6">Data Upload</a></li>
                </ul>
            </nav>
        </header>
        <div>
            <h1>Data Upload</h1>
            <p id="description">
            Upload your data set on this Page! Make sure it is in .csv format and aligns with the City of Anaheim's data set format.
            </p>
            <form onSubmit={handleSubmit}>
                <label for="file">Choose CSV file:</label>
                <input id="filebutton" type="file"  name="file" accept=".csv" required />
                <button type="submit">Upload</button>
            </form>
            <p>{message}</p>
        </div>
        <p id='footer'><b>For Inquiries or Technical Support:</b></p>
        <p id='footer'><b>Deveolper:</b> Josh McDevitt</p>
        <p id='footer'><b>Email:</b> jmcdevitt2003@gmail.com</p>
        <p id='footer'><b>Phone:</b> (949) 616-0246</p>
    </div>
    );
}

export default Page6;