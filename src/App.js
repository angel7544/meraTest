import Nav from "./components/Nav";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Products from './components/Products'
import Home from "./components/Home";
import Sign from "./components/Sign";
import Team from "./components/Team";
import Pagenotfount from './components/Pagenotfount'
import Contact from "./components/Contact";
import Forgotpass from "./components/Forgotpass";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/product" element={<Products/>} exact/>
        <Route path="/contact" element={<Contact/>} exact/>
        <Route path="/login" element={<Login/>} exact/>
        <Route path="/team" element={<Team/>} exact/>
        <Route path="/sign" element={<Sign/>} exact/>
        <Route path="/forgotpass" element={<Forgotpass/>} exact/>
        <Route path="*" element={<Pagenotfount/>} exact/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}
export default App;
