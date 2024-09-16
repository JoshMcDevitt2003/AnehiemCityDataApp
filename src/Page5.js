import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function Page5() {
    const[report, setReport] = useState(`Report will be shown here`)
    const[graphData, setGraphData] = useState(null)
    const[placeHolder, setPlaceHolder] = useState('Graphed data will appear here')
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        try {
            const response = await fetch('https://1pup6cqj6b.execute-api.us-east-1.amazonaws.com/Recidivism', {
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
            <h1>Recidivism Trends</h1>
            <p id="description">
            This page analyzes the entire dataset to generate a comprehensive report on recidivism, where each recidivist is defined to be a unique individuals returning to the Salvation Army.
            </p>
            <form onSubmit={handleSubmit}>
                <button type="submit">Find Recidivism Trends</button>
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

export default Page5;