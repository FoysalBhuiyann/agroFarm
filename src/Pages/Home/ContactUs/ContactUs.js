import React from 'react';
import bgImage from '../../../assets/contactus.jpg'

const ContactUs = () => {
    return (
        <section
        className='mt-32'
        style={{
            
            background: `url(${bgImage})`
        }}
        >
            <div className="hero">
                <div className="mt-16">
                    <div className="text-center">
                        <h1 className="font-xl font-bold uppercase">Contact Us!!!</h1>
                        <p className="text-3xl">Stay connected with us</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <textarea placeholder="Your message" className="mt-4 textarea textarea-success textarea-md w-full max-w-xs" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ContactUs;