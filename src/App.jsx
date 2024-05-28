import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer.jsx"
import MobileNavbar from "./Components/MobileNavbar/MobileNavbar.jsx"
function App() {
  return (
  <div>
   <div className="">
    <div className="desktop-nav">
    <Navbar/>
    </div>
    <div className="mobile-nav">
      <MobileNavbar/>
    </div>
   </div>

  <Home/>
  <Footer/>
    
  </div>
  );
}

export default App;
