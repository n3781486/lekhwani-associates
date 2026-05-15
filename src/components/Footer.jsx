// export default function Footer() {
//   return (
//     <div className="footer">
//       <div className="footer-grid">

//         <div>
//           <h3>L AND A PRIVATE LIMITED</h3>
//           <p>Jaipur, Rajasthan</p>
//         </div>

//         <div>
//           <h4>Useful Links</h4>
//           <p><a href="/" className="nav-item">Home</a></p>
//           <p><a href="/about" className="nav-item">About</a></p>
//           <p><a href="/services" className="nav-item">Services</a></p>
//         </div>

//         {/*<div>
//           <h4>Newsletter</h4>
//           <input placeholder="Email" />
//         </div>*/}

//       </div>
//     </div>
//   );
// }
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-grid">

        {/* LEFT */}
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/logo.png" alt="logo" />
            <h3>L AND A PRIVATE LIMITED</h3>
          </div>
          {/* <p className="location">📍 Jaipur, Rajasthan</p> */}
          <div className="map">
  <iframe
   src="https://www.google.com/maps?q=315,Second Floor,Apex Mall,Near Lalkothi,Tonk Road,Jaipur,Rajasthan&output=embed"
   
    style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>
        </div>

        {/* CENTER */}
        <div className="footer-col center">
          <h4>Useful Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>

        {/* RIGHT */}
        <div className="footer-col right">
          <h4 >Follow Us</h4>
          <div className="socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 L AND A PRIVATE LIMITED. All Rights Reserved.
      </div>
    </div>
  );
}