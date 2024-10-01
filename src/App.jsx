import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import OurServices from './pages/OurServices';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';

import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
