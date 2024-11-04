import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Home from './components/pages/home/home';
import About from './components/pages/about/about';
import Contact from './components/pages/contact/contact';

function App() {
  return (
    <Router>
      <Header />
      <div className="container my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;