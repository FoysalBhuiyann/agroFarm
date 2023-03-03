import React from 'react';
import image from '../../../assets/middle-aged-asian-farmer-man__1_-removebg-preview.png'
import bgImage from '../../../assets/19713308_y0qg_sxld_170312.jpg'

const Care = () => {
    return (
        <section className='mt-32'
        style={{
            
            background: `url(${bgImage})`
        }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="-mt-48 hidden lg:block lg:w-1/2 rounded-lg" alt='' />
                    <div>
                        <h4 className='text-lg text-primary font-bold uppercase'>Share Tips</h4>
                        <h1 className="text-4xl font-bold">Agricultural advice is provided</h1>
                        <p className="py-6 font-bold text-error-content">Agriculture is the practice of cultivating land, raising animals, and producing food, fiber, and other products for human use.
                            Agricultural practices vary widely depending on the location, climate, soil type, and crops or animals being produced.
                            Some common agricultural practices include planting, irrigating, fertilizing, harvesting, and storing crops; raising and caring for livestock; and managing soil health and pest control.,</p>
                        <button className="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Care;