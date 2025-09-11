import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import FAQ from './pages/FAQ';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Catch-all route */}
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </Router>
  );
}

export default App;
