import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function Page1() {
    const[report, setReport] = useState('Report will appear here'); // State to hold the report
    const[placeholder, setPlaceHolder] = useState('Graphed data will appear here');
    const[graphData, setGraphData] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        try {
            const min = document.getElementById("min").value;
            const max = document.getElementById("max").value;
            const response = await fetch(`https://1pup6cqj6b.execute-api.us-east-1.amazonaws.com/entryExit?min=${min}&max=${max}`);
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
                <h1>Entry/Exit Trends</h1>
                <p id="description">
                    This page allows users to input a minimum and maximum date and generates a detailed report displaying the entry and exit trends of clients whose data falls within the specified date range.
                </p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="min">Enter Start Date (mm/dd/yyyy): </label>
                    <input type="text" id="min" name="min" required />
                    <br />
                    <label htmlFor="max">Enter End Date (mm/dd/yyyy): </label>
                    <input type="text" id="max" name="max" required />
                    <br /><br />
                    <button type="submit">Analyze Data</button>
                </form>
                <p>{lines.map((line) => 
                (<div>{line}</div>))}</p>
                <p>{placeholder}</p>
                {graphData && (<Plot data={graphData.data} layout={graphData.layout} />)}
            </div>
            <footer>
        <p id='footer'><b>For Inquiries or Technical Support:</b></p>
        <p id='footer'><b>Deveolper:</b> Josh McDevitt</p>
        <p id='footer'><b>Email:</b> jmcdevitt2003@gmail.com</p>
        <p id='footer'><b>Phone:</b> (949) 616-0246</p>
    </footer>
        </div>
    );
}

export default Page1;
