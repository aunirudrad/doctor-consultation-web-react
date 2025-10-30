import React from 'react';
import bannerImage from './../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div className='max-w-[90%] py-6 px-2 md:py-16 md:px-40 mx-auto border-3 border-white rounded-3xl bg-linear-to-b from-transparent from-0% to-white to-100% mb-20'>
            <div className='max-w-[90%] mx-auto text-center'>
                <h1 className='text-black text-5xl font-extrabold'>Dependable Care, Backed by Trusted <br />Professionals.</h1>
                <br />
                <p className='text-black '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br />routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                <br />
                <div>
                    <input className='w-[40%] text-xs text-black py-5 px-6 bg-white rounded-4xl mr-8' type="text" name="" id="" placeholder='Search any doctor ...' />
                    <button className='text-white bg-blue-500 rounded-4xl py-3 px-6 text-xl font-bold'>Search Now</button>
                </div>
                <div className='flex justify-center items-center gap-5 mt-8'>
                    <img src={bannerImage} alt="" /><img src={bannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;