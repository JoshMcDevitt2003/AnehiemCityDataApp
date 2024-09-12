
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './Page1.js'
import Page2 from './Page2.js'
import Page3 from './Page3.js'
import Page4 from './Page4.js'
import Page5 from './Page5.js'
import Page6 from './Page6.js'
function App() {
  return (
  <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Page5" element={<Page5 />} />
        <Route path="/Page6" element={<Page6 />} />
      </Routes>
    </Router>
  );
}

export default App;
