import React from 'react';

import { NavLink } from 'react-router-dom';

import { AiOutlineTwitter } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="bg-primary">
            <div className="container mx-auto">
                <div className="d:display text-center justify-center sm:flex-nowrap flex-wrap">
                    <p className='text-white font-medium text-2xl py-3'>INTRO / ABOUT College Life / NFT </p>
                    <p className='text-white font-medium text-2xl py-3'>COMMUNITY / ROADMAP / FAQ / TEAM </p>
                </div>
                <div className="flex items-center justify-center flex-wrap md:flex-nowrap flex-row-reverse">
                    <div className="flex items-center md:justify-start justify-center md:w-auto w-full pb-6">
                        <a className="w-20 h-20 flex items-center justify-center mr-7" href="https://twitter.com/eggysnft" target="_blink">
                            <img src="./assets/img/footer-instagram.png" alt="Banner 1"  text-left/>
                        </a>
                        <a className="w-20 h-20 flex items-center justify-center mr-7" href="https://discord.gg/TquhsQBQRn" target="_blink">
                            <img src="./assets/img/footer-twitter.png" alt="Banner 1"  text-left/>
                        </a>
                        <a className="w-20 h-20 flex items-center justify-center" href="https://opensea.io/collection/the-eggys" target="_blink">
                            <img src="./assets/img/footer-discord.png" alt="Banner 1"  text-left/>
                        </a>
                    </div>
                </div>
                <div className="d:display text-center justify-center sm:flex-nowrap flex-wrap">
                    <p className='text-white font-medium text-2xl py-3'>All Rights Reserved College Life</p>
                    <p className='text-white font-medium text-2xl py-3'>All contents of this document, unless otherwise credited, are copyright © 2022 College Life</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
