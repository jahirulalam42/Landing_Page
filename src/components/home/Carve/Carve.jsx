import React from 'react';
import './curve.css'

const Carve = () => {
    return (
        <div className='relative '>
            <div className="w-full h-[600px] bg-gradient-to-r from-[#0EA5E9] to-[#020A4F] "></div>
            <div className='absolute top-0 z-10 h-40 bg-black w-full custom-curve'></div>
            <div className='absolute bottom-0 z-10 h-40 bg-black w-full custom-curve-down'></div>
        </div>
    );
};



export default Carve;