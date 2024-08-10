import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './components/Cart';
import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { loginRequest } from './authConfig';
import ProtectedPage from './components/ProtectedPage';
import DashboardUser from './pages/DashboardUser';
import Reports from './pages/Reports';
import Upload from './pages/Upload';
import Inventory from './pages/Inventory';
import Success from './components/Success';
import Failure from './components/Failure';
import Sales from './pages/Sales';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/dashboarduser' element={<DashboardUser />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/success' element={<Success />} />
          <Route path='/failure' element={<Failure />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/sales' element={<Sales />} />
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
