import { NavLink } from "react-router-dom";


export default function Navbar({ setOpen,open }) {


  
  return (
    
    <div className="navbar">
      {/* <button className="menu-btn" onClick={() => setOpen(prev => !prev)}>☰</button>
      <h2>L AND A PRIVATE LIMITED</h2> */}
    
  <div className="nav-left">
    <button className="menu-btn" onClick={() => setOpen(prev => !prev)}>☰</button>
    <h2 className="logo">L AND A PRIVATE LIMITED</h2>
  </div>
      <div className="nav-links">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavLink to="/services" className="nav-item">Services</NavLink>
        <NavLink to="/contact" className="nav-item">Contact</NavLink>
        <NavLink to="/login" className="nav-item">Login</NavLink>
      </div>
    </div>
  );
}