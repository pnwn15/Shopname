
import './App.css';
import Navbar from './Component/Navbar';
import FooterWithForm from './Component/FooterWithForm';
import Shop from './Pages/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <>
      <Router>
        <div className='w-full h-full bg-white overflow-hidden'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/About" element={<About />} />
          </Routes>
          <FooterWithForm />
        </div>
      </Router>
    </>
  );
}

export default App;
