import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2>Ayush Singh</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#skill">Projects</a>
      <a href="#timeline">Timeline</a>
      <a href="#services">Service</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contact</a>
    </div>

    <div id="gym">
      <a href="https://fitnessedge.vercel.app/body">
        <button>GYMIE</button>
      </a>
    </div>
    <a href="mailto:official.ayushsinghparihar7@gmail.com">
      <button>E-mail</button>
    </a>
  </>
);

export default Header;
