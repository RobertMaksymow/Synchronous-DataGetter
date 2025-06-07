import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/synchronous" element={<h1>Synchronous Page</h1>} />
          <Route path="/messages" element={<h1>Messages Page</h1>} />
          <Route path="/wallet" element={<h1>Wallet Page</h1>} />
          <Route path="/market" element={<h1>Market Page</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="/contact" element={<h1>Contact Us</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p>&copy; 2025 Synchronous:Data_Getter v0.0.1</p>
      </footer>
    </div>
  );
}

export default App;
