import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './page/Signup';

function App() {
  const [view, setview] = useState(false);
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
