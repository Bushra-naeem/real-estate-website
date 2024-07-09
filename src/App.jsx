import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import About from "./sections/About";
import Service from "./sections/Service";
import Property from "./sections/Property";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Service />
      <Property />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
