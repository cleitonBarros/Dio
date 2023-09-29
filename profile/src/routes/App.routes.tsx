import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Menu } from "../components/MenuBubble/menu";

import { About } from "../page/About";
import { Contact } from "../page/Contact";
import { Home } from "../page/Home";

export function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Menu />
        <Footer />
      </BrowserRouter>
    </>
  );
}
