import React, { useRef } from 'react';
import { FaDiscord, FaEgg } from 'react-icons/fa';
import Slider from "react-slick";
import Collapsible from 'react-collapsible';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Homepage = () => {
    const roadmapRef = useRef();
    const sliderSettings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                  dots: true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true
                }
              }
        ]
    };

    return (
        <>
        <Header roadmapRef={roadmapRef} />
        <main>
            <section className="banner-wrapper bg-primary pt-5">
                <div className="container">
                    <div className="md:flex">
                        <div className="md:w-2/5 md:pr-10 ">
                            <img src="./assets/img/banner-character-1.png" alt="Banner 1"  text-left/>
                        </div>
                        <div className="md:w-3/5 md:pr-10 mt-32">
                            <p className='uppercase text-6xl text-center font-bold text-white'><span className='text-gradient'>college</span> life</p>
                            <p className='uppercase text-6xl font-bold text-center text-white'><span className='text-gradient'>nft</span></p>
                            <div className='mt-8 text-center gradient-border-btm'>
                                <button className='bg-grey uppercase text-white font-medium py-4 px-6'>CLICK HERE TO MINT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-us pb-10 bg-primary">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center md:justify-center flex-wrap md:flex-nowrap">
                        <div className="md:w-2/5 md:pr-10 ">
                            <p className='uppercase text-5xl title text-primary px-2 pt-3 pb-10'>about us</p>
                            <p className='uppercase text-2xl font-medium text-white px-5 py-2'>BDGFF DYFYUFUFYYUF UEDDFYYFQ</p>
                            <p className='uppercase text-1xl text-white break-all px-5 py-2'>BDGFF DYFYUFUFYYUF UEDDFYYFQVUFUUUFUVHUHVVHHZXHAGFHVYFVYGVAGHCJXVYFBYFYCVYDAGVYV</p>
                            <p className='uppercase text-1xl text-white break-all px-5 py-2'>BDGFF DYFYUFUFYYUF UEDDFYYFQVUFUUUFUVHUHVVHHZXHAGFHVYFVYGVAGHCJXVYFBYFYCVYDAGVYV</p>
                            <p className='uppercase text-1xl text-white break-all px-5 py-2'>BDGFF DYFYUFUFYYUF UEDDFYYFQVUFUUUFUVHUHVVHHZXHAGFHVYFVYGVAGHCJXVYFBYFYCVYDAGVYV</p>
                        </div>
                        <div className="md:w-3/5 md:pr-10">
                            <img src="./assets/img/about-us.png" alt="Banner 1"  text-left/>
                        </div>
                    </div>
                </div>
            </section>
            <div className='divide bg-primary py-5'><span></span></div>
            <section className="road-map py-10 bg-primary">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <p className='uppercase text-5xl title text-primary px-2 pt-3 pb-10'>road map</p>
                    </div>
                </div>
            </section>
            <div className='divide bg-primary py-5'><span></span></div>
            <section className="faq py-10 bg-primary">
                <div className="container mx-auto">
                    <div className="d-block">
                        <p className='uppercase text-5xl title text-primary px-2 pt-3 pb-10'>faq</p>
                        <div className='text-center py-5'>
                            <div className='question my-16'>
                                <button>
                                    <span className='top-border'></span>
                                    <span className='left-border'></span>
                                    <p className='text-2xl text-white font-medium py-5'>what is the mint price?</p>
                                    <span className='right-border'></span>
                                    <span className='bottom-border'></span>
                                </button>
                            </div>
                            <div className='question my-16'>
                                <button>
                                    <span className='top-border'></span>
                                    <span className='left-border'></span>
                                    <p className='text-2xl text-white font-medium py-5'>How many NFT can I mint per wallet ?</p>
                                    <span className='right-border'></span>
                                    <span className='bottom-border'></span>
                                </button>
                            </div>
                            <div className='question my-16'>
                                <button>
                                    <span className='top-border'></span>
                                    <span className='left-border'></span>
                                    <p className='text-2xl text-white font-medium py-5'>Will there be any celebrity collaborations?</p>
                                    <span className='right-border'></span>
                                    <span className='bottom-border'></span>
                                </button>
                            </div>
                            <div className='question my-16'>
                                <button>
                                    <span className='top-border'></span>
                                    <span className='left-border'></span>
                                    <p className='text-2xl text-white font-medium py-5'>Will there be any celebrity collaborations?</p>
                                    <span className='right-border'></span>
                                    <span className='bottom-border'></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='divide bg-primary py-5'><span></span></div>
            <section className="faq py-10 bg-primary">
                <div className="container mx-auto">
                    <div className="d-block">
                        <p className='uppercase text-5xl title text-primary px-2 pt-3 pb-10'>the team</p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    );
};
export default Homepage;

