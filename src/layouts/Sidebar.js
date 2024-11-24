import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "HomePage",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "PillForm",
    href: "/pillForm",
    icon: "bi bi-card-text",
  },
  {
    title: "Profiles",
    href: "/profileCard",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Take a Pill",
    href: "/pillCard",
    icon: "bi bi-bell",
  },
  {
    title: "Instructions",
    href: "/instructions",
    icon: "bi bi-card-text",
  },
];

const Sidebar = () => {
  const showMobileMenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobileMenu()}
        />
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
                onClick={() => showMobileMenu()}
              >
                <i className={navi.icon}/>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
