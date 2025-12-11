import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './components/Navbar'; // Import Navbar component
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar /> {/* Display navbar on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
	<Footer /> {/* Footer on all pages */}
    </Router>
  );
}

export default App;
