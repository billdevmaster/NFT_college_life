import React, { useState } from 'react';
import { NavLink, Link, useLocation, useHistory } from 'react-router-dom';

import HamburgerMenu from 'react-hamburger-menu'
import { FaDiscord } from 'react-icons/fa';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const Header = ({ roadmapRef, props }) => {
    const [menuOpen, updateMenuOpen] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const goToRoadmap = async (e) => {
        e.preventDefault();
        if (roadmapRef) {
            roadmapRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            updateMenuOpen(false)
        } else {
            await history.push("/");
            console.log(window.innerWidth)
            if (window.innerWidth > 600) {
                window.scrollTo({
                    top: 3750,
                    behavior: "smooth",
                });
            } else {
                window.scrollTo({
                    top: 5250,
                    behavior: "smooth",
                });
            }
        }
    }

    return (
        <>
            <header className="bg-primary relative z-20">
                <div className="container mx-auto">
                    <div className={`block md:flex justify-between items-center`}>
                        <NavLink to="/">
                            <p className='text-4xl text-white'><span className='font-bold'>College</span> Life</p>
                        </NavLink>
                        <nav className="site-menus">
                            <ul className="flex items-center justify-between md:justify-end">
                                <li className={`hidden md:block mx-6 md:pb-3`}><NavLink to="/" className="text-white font-bold text-1xl uppercase hover:text-opacity-70">about us</NavLink></li>
                                <li className={`hidden md:block mx-6 md:pb-3`}><Link to="#rodamap" onClick={goToRoadmap} className="text-white font-bold text-1xl uppercase hover:text-opacity-70">Roadmap</Link></li>
                                <li className={`hidden md:block mx-6 md:pb-3 `}><NavLink to="/faq" className="text-white font-bold text-1xl uppercase hover:text-opacity-70">Faq</NavLink></li>
                                <li className={`hidden md:block mx-6 md:pb-3`}><NavLink to="/mint" className="text-white font-bold text-1xl uppercase hover:text-opacity-70">the team</NavLink></li>
                                <li className="block md:hidden">
                                    
                                    <HamburgerMenu
                                        isOpen={menuOpen}
                                        menuClicked={() => updateMenuOpen(true)}
                                        width={24}
                                        height={20}
                                        strokeWidth={5}
                                        rotate={0}
                                        color='white'
                                        borderRadius={0}
                                        animationDuration={0.5}
                                    />
                                </li>
                            </ul>
                        </nav>
                    </div>
                        <SlidingPane
                            className="mobile-menu"
                            isOpen={menuOpen}
                            width="250px"
                            hideHeader={true}
                            onRequestClose={() => {
                                updateMenuOpen(false);
                        }}>
                            <ul>
                                <li className="my-8"><NavLink to="/" className="text-white font-bold text-1xl uppercase hover:text-opacity-70">about us</NavLink></li>
                                <li className="my-8"><NavLink to="/#rodamap" className="text-white font-bold text-1xl uppercase hover:text-opacity-70" onClick={goToRoadmap}>Roadmap</NavLink></li>
                                <li className="my-8"><NavLink to="/faq" className="text-white font-bold text-1xl uppercase hover:text-opacity-70">Faq</NavLink></li>
                                <li className="my-8"><NavLink to="/mint" className="text-white font-bold text-1xl uppercase hover:text-opacity-70">the team</NavLink></li>
                            </ul>
                        </SlidingPane>
                    
                </div>
            </header>
        </>
    );
};

export default Header;
