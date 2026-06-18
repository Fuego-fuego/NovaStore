import {useState} from "react"; 
import { NavLink } from "react-router-dom";

import search from "../../../assets/icons/misc/search.svg";
import login from "../../../assets/icons/misc/account.svg";
import cart from "../../../assets/icons/misc/shopping-bag.svg";
import menu from "../../../assets/icons/misc/menu.svg";
import close from "../../../assets/icons/misc/close.svg";

import Logo from "../../ui/Logo/logo";





const Header = () => {
    const [navIsExpanded,setNavIsExpanded] = useState(false)


    const toggleNav = () => {
        setNavIsExpanded(prev=> !prev)
    }

    return (
        <header className="bg-[var(--header-bg)] 
                            pbe-[1rem]
                            shadow-2xs dark:shadow-none">
            <div className="container-custom">
                {/* Desktop */}
                <div className=" justify-between items-center hidden sm:flex">
                    {/* Logo */}
                    <Logo />
                    {/* Navigation */}
                    <nav aria-label="Main Navigation" className="text-[var(--text-nav)]  text-nav">
                        <ul role="list" className="flex gap-7 items-center" aria-label="Main Navigation Links">
                            <li>
                                <NavLink to="/" aria-label="Home">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" aria-label="Shop">
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" aria-label="Cart">
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* Search, User, cart icons */}
                    <div className="flex items-center gap-4 justify-between">
                        <NavLink to="/login" aria-label="Login">
                            <img src={login} alt="Login" />
                        </NavLink>
                        <NavLink to="/search" aria-label="Search">
                            <img src={search} alt="Search" />
                        </NavLink>
                        <NavLink to="/cart" aria-label="Cart">
                            <img src={cart} alt="Cart" />
                        </NavLink>
                    </div>
                </div>
                {/* Mobile */}
                <div className="flex items-center gap-4 justify-between sm:hidden ">
                    {/* Logo */}
                    <Logo />
                    {/* Menu, Search, User icons */}
                    <div className="flex items-center gap-4 justify-between">
                        <NavLink to="/search" aria-label="Search">
                            <img src={search} alt="Search" />
                        </NavLink>
                        <NavLink to="/login" aria-label="Login">
                            <img src={login} alt="Login" />
                        </NavLink>
                    {/* Cart */}
                    <NavLink to="/cart" aria-label="Cart">
                        <img src={cart} alt="Cart" />
                    </NavLink>
                    {/* Mobile Nav Toggle */}
                        <button onClick={toggleNav} id="mobileNavToggle" className="mobile-nav-toggle-btn" arial-controls="mobile header navigation">
                            <img 
                            src={menu} 
                            alt="Menu"                            
                            className={`${navIsExpanded && "hidden" }`}
                            />
                            <img 
                            src={close} 
                            alt="close"className="visually-hidden"
                            className={`${!navIsExpanded && "hidden" }`}/>
                            
                            <span className="visually-hidden">menu</span>
                        </button>
                {/* Navigation */}
                    <nav aria-expanded={navIsExpanded} aria-label="Main Navigation" id="mobileMainNav" 
                    className={`mobile-main-nav | 
                                text-[var(--text-nav)]  text-nav
                                rounded-(--border-radius-800)
                                shadow-2xs dark:shadow-none
                                ${navIsExpanded?"fixed":"hidden"}
                                `}>
                        <ul role="list" 
                        className="grid gap-2 justify-center
                                    pe-4
                                    pbs-4
                                    " 
                        aria-label="Main Navigation Links">
                            <li>
                                <NavLink to="/" aria-label="Home">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop" aria-label="Shop">
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" aria-label="Cart">
                                    Cart
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
