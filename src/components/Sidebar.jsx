import { NavLink } from "react-router-dom";
import {FaHome,FaInfoCircle,FaServicestack,FaPhoneAlt} from "react-icons/fa";
export default function Sidebar({ open, setOpen }) {
  return (
    <>
      {/* OVERLAY
      {open && <div className="overlay" onClick={() => setOpen(false)}></div>} */}

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>
       

       <ul>
  <li>
    <NavLink to="/" onClick={() => setOpen(false)}>
      <FaHome />
      Home
    </NavLink>
  </li>

  <li>
    <NavLink to="/about" onClick={() => setOpen(false)}>
      <FaInfoCircle />
      About
    </NavLink>
  </li>

  <li>
    <NavLink to="/services" onClick={() => setOpen(false)}>
      <FaServicestack />
      Services
    </NavLink>
  </li>

  <li>
    <NavLink to="/contact" onClick={() => setOpen(false)}>
      <FaPhoneAlt />
      Contact
    </NavLink>
  </li>
</ul>
      </div>
    </>
  );
}