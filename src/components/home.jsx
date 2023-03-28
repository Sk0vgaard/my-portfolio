import React from 'react';
import {FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import bgImg from '../assets/l_salmon.jpg';

const Home = () => {
    return (
        <div name='home'
             className='w-full h-screen gradient-change flex flex-col justify-between'
        >
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Frontend Developer</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Mathias Skovgaard</h1>
                    <p className='text-2xl'>Always going the extra mile</p>
                </div>

                <div className="relative w-full md:max-w-[474px] sm:max-w-[650px] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 to-green-500 spinner border-4 border-transparent border-t-4 border-opacity-50 rounded-full">
                    </div>
                    <img className="p-1 relative w-full rounded-full" src={bgImg} alt="/" />
                </div>

                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                    <div className='flex justify-between flex-wrap px-4'>
                        <div className='flex px-4 py-2 text-slate-500'><FaLinkedinIn className='h-6 text-indigo-600'/>
                            <p className={'pl-1'}>LinkedIn</p>
                        </div>
                        <div className='flex px-4 py-2 text-slate-500'><FaGithub className='h-6 text-indigo-600'/>
                            <p className={'pl-1'}>GitHub</p>
                        </div>
                        <div className='flex px-4 py-2 text-slate-500'><FaInstagram className='h-6 text-indigo-600'/>
                            <p className={'pl-1'}>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
