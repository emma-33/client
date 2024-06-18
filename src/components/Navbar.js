import React from "react";
import "./Navbar.css";

function Navbar () {
  return (
    <>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="crypto">Crypto</a></li>
          <li><a href="blockchain">Blockchain</a></li>
          <li><a href="forensics">Forensics</a></li>
          <li><a href="gamePwn">GamePwn</a></li>
          <li><a href="hardware">Hardware</a></li>
          <li><a href="misc">Misc</a></li>
          <li><a href="mobile">Mobile</a></li>
          <li><a href="osint">OSINT</a></li>
          <li><a href="pwn">Pwn</a></li>
          <li><a href="reversing">Reversing</a></li>
          <li><a href="web">Web</a></li>
          <li><a href="ctf">CTF</a></li>
        </ul>
      </nav>
    </>
  )
};

export default Navbar;
// Blockchain, crypto, forensics, gamePwn, hardware, misc, mobile, osint, pwn, reversing, web
// CTF challenges