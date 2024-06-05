import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
      </Router>
    </div>
  );
}

export default App;
