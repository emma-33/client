import { NavDropdown } from "react-bootstrap";
import "./DropdownChallenges.css";

function DropdownChallenges() {
  return (
    <>
      <NavDropdown title="Challenges" id="basic-nav-dropdown1">
        <NavDropdown.Item href="crypto">Crypto</NavDropdown.Item>
        <NavDropdown.Item href="blockchain"> Blockchain</NavDropdown.Item>
        <NavDropdown.Item href="forensics">Forensics</NavDropdown.Item>
        <NavDropdown.Item href="gamePwn">GamePwn</NavDropdown.Item>
        <NavDropdown.Item href="hardware">Hardware</NavDropdown.Item>
        <NavDropdown.Item href="misc">Misc</NavDropdown.Item>
        <NavDropdown.Item href="mobile">Mobile</NavDropdown.Item>
        <NavDropdown.Item href="osint">OSINT</NavDropdown.Item>
        <NavDropdown.Item href="pwn">Pwn</NavDropdown.Item>
        <NavDropdown.Item href="reversing">Reversing</NavDropdown.Item>
        <NavDropdown.Item href="web">Web</NavDropdown.Item>
      </NavDropdown>
    </>
  );
}

export default DropdownChallenges;
