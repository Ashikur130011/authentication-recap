import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
      <div className="App">
              <BrowserRouter>
          <AuthProvider>
                  <Header></Header>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="home" element={<Home />} />
                      <Route path="about" element={<About />} />
                      <Route path="login" element={<Login />} />
                  </Routes>
          </AuthProvider>
              </BrowserRouter>
      </div>
  );
}

export default App;
