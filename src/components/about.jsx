import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full my-32 '>
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
                <br/>
                <div className='grid md:grid-cols-2 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <h3 className='text-4xl font-bold text-green-700'>Bankdata</h3>
                        <p className='text-gray-400 mt-2'>Full-time · 1 yr 11 mos</p>
                        <p className='text-gray-400 mt-2'>Senior Frontend Developer (Jan 2023 - Present · 3 mos)</p>
                        <p className='text-gray-400 mt-2'>Technical Product Owner / Frontend Engineer (Feb 2022 - Present · 1 yr 2 mos)</p>
                        <p className='text-gray-400 mt-2'>Fredericia, South Denmark, Denmark</p>
                    </div>
                </div>

                <div className='text-center mt-10'>
                    <h3 className='text-4xl font-bold text-indigo-600'>Skills</h3>
                    <p className='text-gray-500 mt-4'>Backend-webudvikling · DevOps · Præsentationskompetencer · Frontend-udvikling · Networking · Domain-Driven Design (DDD) · Microservices · API Development · Java · Webudvikling · Scrum · Softwareudvikling · Kanban · Microsoft Azure · CSS · AJAX · Git · JavaScript · SQL · HTML5 · Kommunikation · Extreme Programming · Angular · Node.js · TypeScript · GitHub · BitBucket · Jenkins · Swagger · Agile-metodologier</p>
                </div>
            </div>
        </div>
    )
}

export default About;