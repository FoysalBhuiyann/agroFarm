import React from 'react';
import truck from '../../../assets/truck.png'
import vegetables from '../../../assets/vegetables.png'
import box from '../../../assets/package.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Hygiene',
            description: 'Hygiene agro products are  maintain cleanliness and safety in agricultural production and processing.',
            img: vegetables

        },
        {
            id: 2,
            name: 'Package',
            description: 'The package of agro products was securely sealed and labeled with the necessary information.',
            img: box

        },
        {
            id: 3,
            name: 'Export & Import',
            description: 'We are exported and imported between countries to meet the demand for various food and agricultural commodities.',
            img: truck

        },
    ]

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='font-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;