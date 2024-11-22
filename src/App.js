import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import StorePage from './pages/StorePage';
import CartPage from './pages/CartPage';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div id="root">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/store" element={<StorePage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;