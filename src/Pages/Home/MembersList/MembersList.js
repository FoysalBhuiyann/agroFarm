import React from 'react';
import pic1 from '../../../assets/pic 1.jpg'
import pic2 from '../../../assets/pic 2.jpg'
import pic3 from '../../../assets/pic 3.jpg'
import quote from '../../../assets/quote.svg'
import MemberList from './MemberList';


const MembersList = () => {
    const introductionData = [
        {
            id: 1,
            name: 'Rakibul Islam',
            post: 'Founder',
            descriptions: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pic1
        },
        {
            id: 2,
            name: 'Foysal Bhuiyan',
            post: 'Co-Founder & CIO',
            descriptions: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pic2
        },
        {
            id: 3,
            name: 'Rakibul Roman',
            post: 'Co-Founder & CEO',
            descriptions: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: pic3
        },
    ]

    return (
        <section className='mt-16'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='font-xl font-bold text-primary uppercase'>Members</h3>
                    <h2 className='text-3xl'>Introduction</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:gid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                    introductionData.map(introduction => <MemberList
                        key={introduction.id}
                        introduction={introduction}
                    ></MemberList>)
                }
            </div>
        </section>
    );
};

export default MembersList;