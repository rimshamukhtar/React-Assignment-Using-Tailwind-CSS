import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
         <Routes>
         <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contactus' element={<ContactUs/>} />
         </Routes>
         <Footer />
         </Router>
   
    </div>
  );
}

export default App;
