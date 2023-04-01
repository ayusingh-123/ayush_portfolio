import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import dp from "../assets/badboy1.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={dp} alt="Founder" />

        <h2>Ayush Singh Parihar</h2>
        <p>Always eager to learn new tech stacks ...</p>
        <span>Be Adaptable | Become Irreplaceable</span>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.youtube.com/@ayushsinghparihar5381"
            target={"blank"}
          >
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/ayushsingh_2003" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ayusingh-123" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
