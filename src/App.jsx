import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Services from "./pages/Services";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔥 Wrap everything inside MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;