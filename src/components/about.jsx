import React from 'react';

const About = () => {
    return (
        <div className='w-full my-32 '>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>A developer with flare</h2>
                    <p className='text-3xl py-6 text-gray-500'>Lets have a talk</p>
                </div>

                <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>Test</p>
                        <p className='text-gray-400 mt-2'>Good code is tested code</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>100%</p>
                        <p className='text-gray-400 mt-2'>Commitment</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>5 Years</p>
                        <p className='text-gray-400 mt-2'>Frontend Experience</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
