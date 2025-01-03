import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

const App = () => {
  return (
    <div className="app">

      <ToastContainer 
        position="top-center" 
        closeButton={false}
        className="toastC" 
      />


      <Navbar/> 
     

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  )
};

export default App;
