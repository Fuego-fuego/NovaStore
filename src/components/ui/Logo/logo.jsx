import { NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo/logo.svg";

const Logo = () => {
    return (
        <NavLink to="/" >
            <div className="grid place-items-center">
            <img className="w-12 h-12 " src={logo} alt="Nova Store Logo" />
            <p className="
            font-logo 
            text-logo-small-text
            capitalize 
            ">nova store</p>
            </div>
        </NavLink>
    );
};

export default Logo;
