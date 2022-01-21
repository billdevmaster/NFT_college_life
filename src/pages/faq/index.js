import React from 'react';
import Collapsible from 'react-collapsible';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Faq = () => {
    return (
        <>
        <Header />
        <main>
            <section className="md:py-24 py-10 bg-primary md:pb-80">
                <div className="container mx-auto">
                    <h2 className="uppercase text-6xl font-black text-white text-center font-londrina-black">FAQ</h2>
                    <div className="flex items-start flex-wrap justify-center mt-10">
                        <div className="md:mb-8 mb-5 md:px-5 faq w-full md:w-1/2">
                            <Collapsible trigger="What are The Eggys?">
                                <p className="text-white md:pb-8 pb-1">
                                    The Eggys is a collection of 5,555 unique and custom generated eggy characters living on the Ethereum blockchain.<br/>
                                    Each 'Eggy' is built using a random generation of head-wear, eye-wear, eyes & mouth, torso & special backgrounds!<br/>
                                    The more assets your lil eggy character has, the rarer it is!
                                </p>
                            </Collapsible>
                        </div>

                        <div className="md:mb-8 mb-5 md:px-5 faq w-full md:w-1/2">
                            <Collapsible trigger="When does minting begin?">
                                <p className="text-white md:pb-8 pb-1">
                                The Eggys main sale is set to go live February 5th 2022 at 12pm GMT. You'll be able to mint 20 Eggys per transaction in our main sale using your MetaMask wallet.
                                </p>
                            </Collapsible>
                        </div>

                        <div className="md:mb-8 mb-5 md:px-5 faq w-full md:w-1/2">
                            <Collapsible trigger="How much will Eggys cost?">
                                <p className="text-white md:pb-8 pb-1">
                                A Eggy will cost 0.02 ETH + gas, and will remain that price throughout the minting period. It
                                will be a fair distribution with no bonding curves, tiers, or reservations.

                                </p>
                            </Collapsible>
                        </div>

                        <div className="md:mb-8 mb-5 md:px-5 faq w-full md:w-1/2">
                            <Collapsible trigger="Where are the images stored?">
                                <p className="text-white md:pb-8 pb-1">
                                    All images are hosted through IPFS with additional pinning through Pinata.
                                </p>
                            </Collapsible>
                        </div>

                        <div className="md:mb-8 mb-5 md:px-5 faq w-full md:w-1/2">
                            <Collapsible trigger="How many Eggys are there?">
                                <p className="text-white md:pb-8 pb-1">
                                There will only ever be 5,555 Eggys minted in Gen 1. That's the max supply.
                                </p>
                            </Collapsible>
                        </div>

                        <div className="md:mb-8 mb-5 md:px-5 faq w-full md:w-1/2">
                            <Collapsible trigger="Will you host any giveaways?">
                                <p className="text-white md:pb-8 pb-1">
                                Yes! We'll be minting 55 Eggys that will be used exclusively for giveaways. Most of these will be given out after launch and will not occupy the early token ids.<br/><br/>
                                Make sure you follow us on Twitter and Discord to be entered into any of our upcoming giveaways.<br/><br/>
                                anyone who mints between #1-2777 are automatically entered into a raffle to win a free 'Egg-sperimental' Eggy.<br/>
                                Egg-sperimental eggys are far and few between, and act as a canvas to house the crazy brain-children that spawn out of our lead illustrator's noggin.<br/>
                                They will be stored in a separate collection; but you will still be able to trade them if you hold one!<br/>
                                </p>
                            </Collapsible>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
};
export default Faq;

