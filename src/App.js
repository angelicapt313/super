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

import QuickStoreDashboard from './quickStoreDashboard/Dashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route 
              path="/dashboarduser" 
              element={
                <MsalAuthenticationTemplate interactionType="popup" authenticationRequest={loginRequest}>
                  <DashboardUser />
                </MsalAuthenticationTemplate>
              } 
            />
            <Route 
              path="/reports" 
              element={
                <MsalAuthenticationTemplate interactionType="popup" authenticationRequest={loginRequest}>
                  <Reports />
                </MsalAuthenticationTemplate>
              } 
            />
            <Route 
              path="/upload" 
              element={
                <MsalAuthenticationTemplate interactionType="popup" authenticationRequest={loginRequest}>
                  <Upload />
                </MsalAuthenticationTemplate>
              } 
            />
            <Route 
              path="/sales" 
              element={
                <MsalAuthenticationTemplate interactionType="popup" authenticationRequest={loginRequest}>
                  <Sales />
                </MsalAuthenticationTemplate>
              } 
            />
            <Route 
              path="/inventory" 
              element={
                <MsalAuthenticationTemplate interactionType="popup" authenticationRequest={loginRequest}>
                  <Inventory />
                </MsalAuthenticationTemplate>
              } 
            />
            
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
