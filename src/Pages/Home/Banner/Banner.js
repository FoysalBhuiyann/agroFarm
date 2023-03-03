import React from 'react';
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'
import banner4 from '../../../assets/banner4.jpg'


const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={banner1} className="w-full"  alt=''/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-ghost">❮</a>
                            <a href="#slide2" className="btn btn-ghost">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={banner2} className="w-full" alt=''/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-ghost">❮</a>
                            <a href="#slide3" className="btn btn-ghost">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src= {banner3} className="w-full" alt=''/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-ghost">❮</a>
                            <a href="#slide4" className="btn btn-ghost">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src= {banner4} className="w-full" alt=''/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-ghost">❮</a>
                            <a href="#slide1" className="btn btn-ghost">❯</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Cultivating, Harvesting & Growing.</h1>
                    <p className="py-6">Agro products refer to the raw materials and commodities that are produced through agricultural processes. These products are typically grown and harvested from farms...</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;