import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  //Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  //UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import { useCookies } from "react-cookie";





const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  const handleLogout = () =>{
    console.log(cookies.user);
    removeCookie("user", { path: "/" });
    window.location.reload();

  }

  return (
    <Navbar color="primary" dark expand="md" style={{textAlign: "center"}}>
      <div className="d-flex align-items-center">
        <NavbarBrand href="/" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
        <Button
          color="primary"
          className="d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"/>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
        </Button>
      </div>


        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/starter" className="nav-link">
              <div>
                <h2>Home</h2>
              </div>
            </Link>
          </NavItem>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="primary">
            <img
            src={cookies.user.src}
            alt="profile"
            className="rounded-circle"
            style={{width:"30px"}}

            />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown>
    </Navbar>
  );
};

export default Header;
