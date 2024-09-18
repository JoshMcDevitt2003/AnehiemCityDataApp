import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function Page2 (){
    const[report, setReport] = useState(`Report Will Appear Here`)
    const[graphData, setGraphData] = useState(null)
    const[placeHolder, setPlaceHolder] = useState('Graphed Data Will Appear Here')

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        try {
            const min = document.getElementById("min").value;
            const max = document.getElementById("max").value;
            const response = await fetch(`https://1pup6cqj6b.execute-api.us-east-1.amazonaws.com/los?min=${min}&max=${max}`, {
                method: 'GET'
            });
            if (response.ok) {
                const result = await response.json();
                setGraphData({
                    data: result.graphData.data, // Ensure this is an array
                    layout: result.graphData.layout // Ensure this is an object
                });
                setReport(result.report)
                setPlaceHolder('')
            } else {
                setReport('Analysis failed. Please try again.')
            }
        }

        catch (error) {
            setReport('An error occured.')
        }
    }
    const lines = report.split('\n')
    
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
            <h1>Length Of Stay Data Metrics</h1>
            <p id="description">
            This page allows users to input a minimum and maximum length of stay and generates a detailed report displaying the exit trends of clients whose length of stay falls within the specified range.
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="min">Minimum Length Of Stay (days): </label>
                <input type="text" id="min" name="min" required />
                <br />
                <label htmlFor="max">Maximum Length Of Stay (days): </label>
                <input type="text" id="max" name="max" required />
                <br /><br />
                <button type="submit">Analyze Data</button>
            </form>
            <p>{lines.map((line) => 
                (<div>{line}</div>))}</p>
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

export default Page2;