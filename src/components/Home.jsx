import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronBarDown } from "react-icons/bs";
import me from "../assets/dp.png";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 30, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectCount = () => {
    animate(0, 20, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Ayush Singh
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:official.ayushsinghparihar7@gmail.com">Hire Me</a>
            <a href="#project">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              ></motion.span>
            </p>
            <span>Courses Completed</span>
          </article>

          <aside>
            <article>
              <p>
                +
                <motion.span
                  whileInView={animationProjectCount}
                  ref={projectCount}
                ></motion.span>
              </p>
              <span>Projects Made</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>official.ayushsinghparihar7@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Ayush Singh" />
      </section>
      <BsChevronBarDown />
    </div>
  );
};

export default Home;
