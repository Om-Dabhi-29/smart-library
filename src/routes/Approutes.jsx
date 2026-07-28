import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Books from "../pages/Books/Books";
import Login from "../pages/Login/Login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/books" element={<Books />} />

          <Route path="/login" element={<Login />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;