import React, { useState } from 'react';

function Page6() {
    const[message, setMessage] = useState('')
    const[file,setFile] = useState(null)
    
    const handleChange = (event) => {
        setFile(event.target.files[0]);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            setMessage('Please upload File')
        }

        const formData = new FormData()
        formData.append('file', file)

        try {
            const response = await fetch('https://6hynxwo06g.execute-api.us-east-1.amazonaws.com/fileupload', {
                method: 'POST',
                headers: {
                    'file-name': file.name
                },
                body: formData
            })
            if (response.ok) {
                setMessage('Data upload successful')
            } else {
                setMessage('Upload failed. Please Try Again')
            }
        }

        catch (error) {
            setMessage('An error occured during file upload.')
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
            <h1>Data Upload</h1>
            <p id="description">
            Upload your data set on this Page! Make sure it is in .csv format and aligns with the City of Anaheim's data set format.
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="file">Choose CSV file:</label>
                <input id="filebutton" type="file"  name="file" accept=".csv"  onChange={handleChange} required />
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