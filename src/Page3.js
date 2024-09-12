import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function Page3() {
    const[report, setReport] = useState(`Report will be shown here`)
    const[graphData, setGraphData] = useState(null)
    const[placeHolder, setPlaceHolder] = useState('Graphed data will appear here')

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        const minAge = event.target.min.value;
        const maxAge = event.target.max.value;
        const data = [
            {
                type: 'pie',
                labels: [], // Empty labels
                values: [], // Empty values
                marker: {
                    colors: ['lightblue', 'lightgreen', 'lightcoral'], // Optional: Set colors for the pie slices
                },
            },
        ];

        const layout = {
            title: `Pie Chart for dates`,
        };
        setReport(`report data from ${minAge} to ${maxAge}`)
        setGraphData({data, layout})
        setPlaceHolder('')
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
            <h1>Age Data Metrics</h1>
            <p id="description">
            This page allows users to input a minimum and maximum age and generates a detailed report displaying the exit trends of clients whose ages fall within the specified range.
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="min">Minimum age (years): </label>
                <input type="text" id="min" name="min" required />
                <br />
                <label htmlFor="max">Maximum age (years): </label>
                <input type="text" id="max" name="max" required />
                <br /><br />
                <button type="submit">Analyze Data</button>
            </form>
            <p>{report}</p>
            <p>{placeHolder}</p>
            {graphData && (<Plot data={graphData.data} layout={graphData.layout} />)}
        </div>
        <p id='footer'><b>For Inquiries or Technical Support:</b></p>
        <p id='footer'><b>Deveolper:</b> Josh McDevitt</p>
        <p id='footer'><b>Email:</b> jmcdevitt2003@gmail.com</p>
        <p id='footer'><b>Phone:</b> (949) 616-0246</p>
    </div>
    );
}

export default Page3;