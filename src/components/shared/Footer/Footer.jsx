import { NavLink } from "react-router-dom";

import Input from "../../ui/Input/Input";
import Btn from "../../ui/Button/Button"
import Logo from "../../ui/Logo/logo"

import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    const year = (new Date()).getFullYear();
    return (
        <footer className="
        pbs-10  pbe-12
        bg-(--footer-bg) text-(--footer-fg)">
        <div className="container-custom">
            {/* Footer content + copy right wrapper */}
            <div className="grid gap-8 place-items-center ">
            {/* Email, footer nav, social-links + logo,  */}
            <div className="
            flex 
            flex-col gap-8
            lg:w-full 
            lg:flex-row-reverse lg:justify-between lg:align-center
            ">
                {/* Email section*/}
                <div className="grid gap-6 place-items-center lg:items-between lg:place-items-start">
                    <div className="grid gap-2 text-center lg:text-left">
                        <h2 className=" font-bold capitalize ">
                            sign up and save
                        </h2>
                        <p className="max-w-(--mw-footer-email-p)">
                            Subscribe to get even more special offers,free giveaways, and once-in-a-lifetime deal!
                        </p>
                    </div>
                        {/* Email */}
                        <form action="">
                            <div className="flex gap-4">
                                <Input 
                                type="email" placeholder="johndoe@mail.com" 
                                required 
                                className="bg-(--footer-bg)"
                                />
                                <Btn text="send" variant="inverted"/>
                            </div>
                        </form>
                </div>
                {/* navigation */}
                <nav aria-label="footer navigation">
                    <ul aria-label="footer links list"  role="list"
                    className="
                    grid grid-cols-2 gap-2 place-items-center
                    capitalize 
                    lg:gap-11
                    ">
                        <div className="grid gap-4">
                            <li>
                                <NavLink to="/">home</NavLink>
                            </li>
                            <li>
                                <NavLink>products </NavLink>
                            </li>
                            <li>
                                <NavLink>about us</NavLink>
                            </li>
                            <li>
                                <NavLink>career</NavLink>
                            </li>
                        </div>
                        <div className="grid gap-4">
                            <li>
                                <NavLink>shipping policy</NavLink>
                            </li>
                            <li>
                                <NavLink>return policy</NavLink>
                            </li>
                            <li>
                                <NavLink>privacy policy</NavLink>
                            </li>
                            <li>
                                <NavLink>contact us</NavLink>
                            </li>
                        </div>
                    </ul>

                </nav>
                {/* social links & Logo */}
                <div className="
                flex flex-col 
                gap-8
                place-items-center
                lg:flex-col-reverse 
                lg:justify-between">
                    {/* social  links*/}
                    <ul className="flex gap-4 ">
                        <li>
                            <NavLink>
                                
                        <FaFacebook className="footer-icon"/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                        <GrInstagram  className="footer-icon"/>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink>
                        <FaXTwitter  className="footer-icon"/>
                        </NavLink>
                        </li>
                        <li>
                            <NavLink>
                        <FaYoutube  className="footer-icon"/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                        <FaLinkedin  className="footer-icon"/>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink>
                       <FaGithub className="footer-icon"/>
                            </NavLink>
                        </li>
                    </ul>
                    <Logo className="footer-logo"/>
                </div>
            </div>
            {/* Payments and copy right */}
            <div className="grid 
            text-primary-footer-copyright-text capitalize font-semibold">
                <p>&copy;{year} ,nova store</p>
            </div>
            </div>
        </div>
        </footer>
    )
}



export default Footer