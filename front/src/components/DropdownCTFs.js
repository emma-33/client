import { NavDropdown } from "react-bootstrap";
import "./DropdownCTFs.css";

function DropdownCTF() {
  return (
    <NavDropdown title="CTF's" id="basic-nav-dropdown2">
      <NavDropdown.Item href="CurrentCTF">Current CTF's</NavDropdown.Item>
      <NavDropdown.Item href="ComingupCTF">Coming up CTF's</NavDropdown.Item>
    </NavDropdown>
  );
}

export default DropdownCTF;
