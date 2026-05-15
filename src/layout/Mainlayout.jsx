import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="app-layout">
      <Navbar setOpen={setOpen} open={open} />   
     <div className="page-wrapper">
    <Sidebar open={open} setOpen={setOpen} /> 

         <div className={`content-area ${open ? "shift" : ""}`}>
          <main className="main-content">
            <Outlet />
          </main>
        </div>
    </div>
      <Footer />
    </div>
  );
}