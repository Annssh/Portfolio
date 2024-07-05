import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Ansh Agrawal
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/ansh.agrawal.7568" target="blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#" target="blank">
            <img src="/instagram.webp" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/ansh-agrawal-396116251/"
            target="blank"
          >
            <img src="/linkedin.webp" alt="" />
          </a>
          <a href="https://github.com/Annssh" target="blank">
            <img src="/github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
