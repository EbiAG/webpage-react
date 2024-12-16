import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<><h1>Home Page</h1></>} />
      </Routes>
    </Router>
  );
}

export default App;