import Card from "../components/Card";
import Hero from "../components/Hero";
import { FaBullseye, FaEye, FaTrophy, FaUserTie, FaBuilding, FaLaptopCode } from "react-icons/fa";

export default function Home() {
  const cardData = [
    {
      title: "Mission",
      description:
        "Our mission is to deliver high-quality financial and professional services tailored to our clients’ needs. We focus on building long-term relationships through trust, transparency, and consistent results.",
       icon: FaBullseye,
      },
    {
      title: "Vision",
      description:
        "Our vision is to become a leading consultancy firm known for excellence, innovation, and integrity. We aim to empower businesses and individuals with reliable solutions for sustainable growth.",
      icon: FaEye,
    
    },
    {
      title: "Achievements",
      description:
        "Since our establishment, we have successfully served numerous clients across various industries, maintaining strong professional standards and delivering measurable results with expertise and dedication.",
      icon: FaTrophy,
    },
    {
        title: "Expertise",
        description: "We leverage advanced tech for cloud, automated accounting, and end-to-end compliance, delivering expert tax guidance and strategic support to ensure efficiency and integrity.",
        icon: FaUserTie,
        /*description:"We leverage the latest technologies to deliver cloud-based communication solutions, automated accounting systems, and comprehensive compliance management. With in-depth knowledge of taxation and regulatory laws, we provide accurate guidance, effective and strategic solutions for any compliance matter, empowering our clients to achieve operational efficiency and maintain regulatory integrity."*/
    },
    {
        title: "Facilities",
        description: "We deliver expert tax and compliance consultancy using advanced cloud accounting to ensure accurate, efficient financial management, enabling growth, control and long-term success.",
        icon: FaBuilding,
        /*description: "We provide comprehensive consultancy in taxation and regulatory compliance, leveraging advanced cloud-based accounting platforms to ensure accurate, efficient, and seamless financial management. Our bespoke solutions empower clients to navigate complex business challenges, maintain full regulatory compliance, and strategically optimize operations for sustainable growth, scalability, and long-term success."*/
    },
    {
        title: "Technology",
        description: "We use advanced technology to improve data interpretation, delivering client-centric consultancy in taxation, compliance and finance, simplifying bookkeeping with robust software.",
        icon: FaLaptopCode,
        /*description: "We are using latest technology advancements, which have enhanced the accountants ability to interpret data efficiently and effectively and provide specialized consultancy in taxation, regulatory compliance and financial support by using client centric and statutory expertise approaches. We facilitates simplify taxation and efficient book keeping and accounting underpinned by advance developed software."*/
    }

  ];

  return (
    <>
      <Hero />

      <div className="container">
        <div className="card-container">
          {cardData.map((card, index) => (
            <Card
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              
            />
          ))}
        </div>
      </div>
    </>
  );
}