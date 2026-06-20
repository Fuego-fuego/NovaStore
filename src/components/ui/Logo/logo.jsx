import { NavLink } from "react-router-dom";
import { SiSinglestore } from "react-icons/si";
import logo from "../../../assets/icons/logo/logo.svg";

const Logo = ({className=""}) => {
    return (
        <NavLink to="/" >
            <div className="grid place-items-center gap-2">
            <SiSinglestore className={`w-7 h-7 ${className}`} src={logo} alt="Nova Store Logo" />
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
