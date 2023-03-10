import React, { useState } from 'react';
import serviceBanner from '../../../assets/MainService.jpg'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const MainServiceBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={serviceBanner} className="max-w-sm rounded-lg shadow-2xl" alt='service Banner' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}

                        />
                        <p>You have selected date : {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainServiceBanner;