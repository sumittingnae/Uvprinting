//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Blog from "./pages/Blog/Blog";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
