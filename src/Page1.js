import React, { useState } from 'react';
import Plot from 'react-plotly.js';

function Page1() {
    const[report, setReport] = useState('Report will appear here'); // State to hold the report
    const[placeholder, setPlaceHolder] = useState('Graphed data will appear here');
    const[graphData, setGraphData] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        const minDate = event.target.min.value;
        const maxDate = event.target.max.value;
        const data = [
            {
                type: 'histogram',
                x: [],  // Empty x-axis data
                marker: {
                    color: 'lightblue',
                },
            },
        ];

        const layout = {
            title: `Graph for dates from ${minDate} to ${maxDate}`,
            xaxis: {
                title: 'X Axis',
            },
            yaxis: {
                title: 'Y Axis',
            },
        };

        // Example of how you might handle the form submission
        // You would typically send a request to your backend here
        // For demonstration, we'll just update the report state
        setGraphData({ data, layout });
        setPlaceHolder(``);
        setReport(`The report from ${minDate} to ${maxDate}`)
    };

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
                <p>{report}</p>
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
