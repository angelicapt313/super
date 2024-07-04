import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './components/Cart';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import ProtectedPage from './components/ProtectedPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route 
            path="/protected" 
            element={
              <MsalAuthenticationTemplate interactionType="popup" authenticationRequest={loginRequest}>
                <ProtectedPage />
              </MsalAuthenticationTemplate>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
