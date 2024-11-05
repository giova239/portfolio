import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Home from './components/pages/home/home';
import Portfolio from './components/pages/portfolio/portfolio';
import About from './components/pages/about/about';
import Contact from './components/pages/contact/contact';
import Uikit from './components/pages/uikit/uikit';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1 bg-light pt-14 p-4 p-md-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/uikit" element={<Uikit />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
