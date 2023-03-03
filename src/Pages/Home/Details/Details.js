import React from 'react';
import farmer from '../../../assets/farmer.JPG'

const Details = () => {
    return (
        <div className='mt-16 shadow-xl grid grid-cols-1 md:gid-cols-1 lg:grid-cols-2'>
            <div className="card card-side bg-base-100">
                <figure><img src={farmer} alt="Movie" /></figure>
            </div>
            <div>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Agro products refer to the raw materials and commodities that are produced through agricultural processes. These products are typically grown and harvested from farms and can include crops, livestock, and other agricultural resources.
                        <br />
                        The process of agro product collection and production involves a range of activities, from planting and growing crops, to harvesting, processing, and packaging. Farmers and agricultural workers are responsible for cultivating the land and tending to the crops and livestock, while processors and manufacturers transform the raw materials into usable products that can be sold to consumers.
                        <br />
                        In order to ensure high-quality agro products, farmers and processors must follow strict guidelines and standards for production and packaging. This includes using sustainable and eco-friendly practices, minimizing the use of harmful chemicals and pesticides, and adhering to strict safety and hygiene regulations.
                    </p>
                    <div className="card-actions justify-start mt-16">
                      <a className="btn bg-gradient-to-r from-primary to-secondary text-white" href="https://www.linkedin.com/company/r-f-r-agro-farm/">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;