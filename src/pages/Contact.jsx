// export default function Contact() {
//   return (
//     <div className="contact-wrapper">

//       <h1 className="contact-title">Contact Us</h1>

//       <div className="contact-gird-wrapper">

//         <div className="contact-grid">

//           {/* LEFT SIDE */}
//           <div className="contact-info">
//             <h3>L AND A PRIVATE LIMITED</h3>

//             <p><strong>Address:</strong><br />
//               315, Second Floor, Apex Mall,<br />
//               Near Lalkothi, Tonk Road,
//               Jaipur, Rajasthan
//             </p>

//             <p><strong>Phone:</strong><br />
//               +91-9929599599, 
//               +91-9549946999
//             </p>

//             <p><strong>Email:</strong><br />
//               info@lekhwaniassociates.in
//             </p>

//             <p><strong>Working Hours:</strong><br />
//               Mon - Sat: 10:00 AM - 7:00 PM
//             </p>
//           </div>

//           {/* RIGHT SIDE */}
//           {/*<form className="contact-form">
//             <input type="text" placeholder="Your Name" />
//             <input type="email" placeholder="Email Address" />
//             <textarea placeholder="Your Message" rows="5"></textarea>
//             </form>*/}


//              {/* RIGHT SIDE */}
//           {
//             <form className="contact-form">
//             <input type="text" placeholder="Your Name" />
//             <input type="email" placeholder="Email Address" />
//             <textarea placeholder="Your Message" rows="5"></textarea>
//             </form>
//             }
//             <button type="button"><a className="nav-link" target="blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdHxcXi6vvoTVkRBmIuGjZHMLyYs1K2wT_JkopL-nf8Vf2CGA/viewform">Go to Google Form</a></button>

//         </div>
//       </div>
//     </div>
//   );
// }


//using formsubmit 

// import { useState } from "react";
// import emailjs from "@emailjs/browser";
// export default function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !formData.name ||
//       !formData.email ||
//       !formData.message
//     ) {
//       alert("Please fill all fields");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://formsubmit.co/ajax/n3781486@gmail.com",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//           },

//           body: JSON.stringify({
//             ...formData,

//             // SUBJECT FIX
//             _subject: `Query related - ${formData.name}`,

//             _replyto: formData.email,

//             // MAIL FORMAT
//             _template: "table"
//           })
//         }
//       );

//       const data = await response.json();

//       if (data.success === "true") {

//         alert("Message Sent Successfully ✅");

//         setFormData({
//           name: "",
//           email: "",
//           message: ""
//         });

//       } else {
//         alert("Something went wrong ❌");
//       }

//     } catch (error) {
//       alert("Server Error ❌");
//     }
//   };

//   return (
//     <div className="contact-wrapper">

//       <h1 className="contact-title">Contact Us</h1>

//       <div className="contact-gird-wrapper">

//         <div className="contact-grid">

//           {/* LEFT SIDE */}
//           <div className="contact-info">

//             <h3>L AND A PRIVATE LIMITED</h3>

//             <p>
//               <strong>Address:</strong><br />
//               315, Second Floor, Apex Mall,<br />
//               Near Lalkothi, Tonk Road,
//               Jaipur, Rajasthan
//             </p>

//             <p>
//               <strong>Phone:</strong><br />
//               +91-9929599599,
//               +91-9549946999
//             </p>

//             <p>
//               <strong>Email:</strong><br />
//               info@lekhwaniassociates.in
//             </p>

//             <p>
//               <strong>Working Hours:</strong><br />
//               Mon - Sat: 10:00 AM - 7:00 PM
//             </p>

//           </div>

//           {/* RIGHT SIDE */}
//           <form className="contact-form" onSubmit={handleSubmit}>

//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={formData.email}
//               onChange={handleChange}
//             />

//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//             ></textarea>

//             <button type="submit">
//               Send Message
//             </button>

//           </form>

//         </div>

//       </div>

//     </div>
//   );
// }


import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      await emailjs.send(

        "service_0chbk3n", // SERVICE ID

        "template_poadu88", // TEMPLATE ID

        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },

        "VJFhxOzgdvfS2eriO" // PUBLIC KEY
      );

      alert("Message Sent Successfully ✅");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {

      alert("Something went wrong ❌");
    }
  };

  return (

    <div className="contact-wrapper">

      <h1 className="contact-title">
        Contact Us
      </h1>

      <div className="contact-gird-wrapper">

        <div className="contact-grid">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <h3>L AND A PRIVATE LIMITED</h3>

            <p>
              <strong>Address:</strong><br />
              315, Second Floor, Apex Mall,<br />
              Near Lalkothi, Tonk Road,
              Jaipur, Rajasthan
            </p>

            <p>
              <strong>Phone:</strong><br />
              +91-9929599599,
              +91-9549946999
            </p>

            <p>
              <strong>Email:</strong><br />
              info@lekhwaniassociates.in
            </p>

            <p>
              <strong>Working Hours:</strong><br />
              Mon - Sat: 10:00 AM - 7:00 PM
            </p>

          </div>

          {/* RIGHT SIDE */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}