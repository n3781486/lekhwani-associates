import { useState } from "react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Registrations",
      items: [
        "GST Registration",
        "LLP & Partnership Registrations",
        "Company Registration",
        "Business Registrations",
      ],
      details: [
        {
          heading: "Individuals & Sole Proprietors",
          docs: [
            "Passport size photograph",
            "PAN card",
            "Aadhaar card",
            "Business address proof",
            "Rent receipt with NOC",
            "Authorised signatory letter",
            "Valid email & mobile",
          ],
        },
        {
          heading: "Partnerships & LLPs",
          docs: [
            "Partnership deed",
            "PAN cards of partners",
            "Photographs",
            "Address proof",
            "Authorised signatory resolution",
            "Business address proof",
          ],
        },
        {
          heading: "Companies",
          docs: [
            "Company PAN",
            "Certificate of incorporation",
            "Director PAN & photos",
            "Address proof",
            "Authorised signatory letter",
          ],
        },
      ],
    },

    {
      title: "Statutory Returns",
      items: [
        "GST Returns & Compliances",
        "Income Tax Returns",
        "ROC Returns",
        "TDS Returns",
      ],
      details: [
        {
          heading: "Required Documents",
          docs: [
            "PAN Card",
            "Financial Statements",
            "Bank Statements",
            "Previous Returns",
            "GST Data",
          ],
        },
      ],
    },

    {
      title: "Facilitation",
      items: ["DSC", "PAN", "TAN"],
      details: [
        {
          heading: "Required Documents",
          docs: [
            "Aadhaar Card",
            "PAN Card",
            "Passport Photo",
            "Mobile & Email",
          ],
        },
      ],
    },

    {
      title: "Business Management",
      items: [
        "Accounting & Reporting",
        "Financial Analysis",
        "Business Consultancy",
      ],
      details: [
        {
          heading: "Required Details",
          docs: [
            "Business Financial Data",
            "Bank Statements",
            "Invoices",
            "Expense Records",
          ],
        },
      ],
    },

    {
      title: "Financial & Investment",
      items: [
        "Financial Assistance",
        "Investment Analysis",
        "Credit Review",
        "Loans",
      ],
      details: [
        {
          heading: "Required Documents",
          docs: [
            "Income Proof",
            "Bank Statements",
            "Credit Score",
            "Business Plan",
          ],
        },
      ],
    },

    {
      title: "E-Commerce Services",
      items: [
        "Data Management",
        "Profit Analysis",
        "Decision Factors",
      ],
      details: [
        {
          heading: "Required Data",
          docs: [
            "Sales Data",
            "Platform Reports",
            "Inventory Data",
            "Profit Margins",
          ],
        },
      ],
    },
  ];

  return (
    <div className="about-wrapper">

      {/* HERO */}
      <div className="about-hero">
        <h1>Our Services</h1>
        <p>We are a progressive business consultancy firm in India</p>
      </div>

    <div className="container">

      <div className="card-container">
        {services.map((service, index) => (
          <div
            key={index}
            className="card service-card"
            
          >
            <h3>{service.title}</h3>

            <ul>
              {service.items.map((item, i) => (
                <li key={i} onClick={() => setSelectedService(service.details[i]?{title: [service.title], details: service.details[i]}:null)}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedService && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="modal large-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedService.title}</h2>

            
              <div key={selectedService.title} className="modal-section">
                <h4>{selectedService.details.heading}</h4>

                <ul>
                  {selectedService.details.docs.map((doc, i) => (
                    <li key={i}>{doc}</li>
                  ))}
                </ul>
              </div>

            <button
              className="close-btn"
              onClick={() => setSelectedService(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
      </div>
  );
}