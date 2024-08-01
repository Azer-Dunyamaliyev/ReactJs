import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkShop from './pages/WorkShop';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/workshop" element= {<WorkShop />} />
        <Route path="/blog" element= {<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

