import { ReactComponent as LogoDark } from "../assets/images/logos/Screenshot-2024-11-24-162614.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <LogoDark />
    </Link>
  );
};

export default Logo;
