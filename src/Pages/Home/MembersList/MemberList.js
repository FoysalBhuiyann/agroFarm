import React from 'react';

const MemberList = ({ introduction }) => {
    const { name, descriptions, img, post } = introduction;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{descriptions}</p>
            </div>
            <div className='flex items-center'>
                <div className="avatar">
                    <div className="w-20 m-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src= {img} />
                    </div>
                </div>
                <div className='m-5 font-semibold'>
                    <p className="">{name}</p>
                    <p>{post}</p>
                </div>
            </div>
        </div>
    );
};

export default MemberList;