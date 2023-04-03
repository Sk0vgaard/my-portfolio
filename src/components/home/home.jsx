import './home.css';
import React, {useEffect, useState} from 'react';
import {FaGithub, FaLinkedinIn, FaTwitter} from "react-icons/fa";
import bgImg from '../../assets/l_salmon.jpg';

const Home = () => {
    const linkedInUrl = "https://www.linkedin.com/in/mathias-skovgaard/";
    const githubUrl = "https://github.com/Sk0vgaard";
    const twitterUrl = "https://twitter.com/sk0vgaard";

    const [fadeProp, setFadeProp] = useState({fade: 'fade-in'});
    const [fadeIn, setFadeIn] = useState('opacity-0');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setFadeIn('fade-in-4');
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);


    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 1500);

        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <div name='home' className={`w-full h-screen gradient-change flex flex-col`}>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <div className={'hidden md:block'}>
                        <p className={`text-2xl ${fadeIn} ${fadeProp.fade}`}>Frontend Developer</p>
                        <h1 className={`pt-5 pb-8 text-5xl md:text-7xl font-bold ${fadeIn}`}>
                            Mathias Skovgaard
                        </h1>
                    </div>
                    <div
                        className={`flex font-poppins uppercase tracking-[5px] bg-yellow-100 text-xs md:text-xl px-[6px] md:px-[35px] py-[20px] h-[55px] md:h-[70px] shadow-xl ${fadeIn}`}>
                        <p>
                            I am a
                        </p>
                        <div className='grid ml-[8px] overflow-hidden'>
                            <p className="text-scroll underline">Problem solver</p>
                            <p className="text-scroll underline">Proactive communicator</p>
                            <p className="text-scroll underline">Detail oriented</p>
                            <p className="text-scroll underline">Team player</p>
                            <p className="text-scroll underline">Continuous learner</p>
                            <p className="text-scroll underline">Problem solver</p>
                        </div>
                    </div>

                </div>

                <div className={`relative w-full md:max-w-[474px] sm:max-w-[650px] overflow-hidden ${fadeIn}`}>
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 to-green-500 spinner border-4 border-transparent border-t-4 border-opacity-50 rounded-full">
                    </div>
                    <img className="p-1 relative w-full rounded-full" src={bgImg} alt="/"/>
                </div>

                <div className='absolute bottom-[1%] sm:bottom-[5%] left-0 right-0 flex justify-center'>
                    <div
                        className={`flex flex-col py-8 mx-1 bg-zinc-200 border border-slate-300 rounded-xl shadow-xl ${fadeIn}`}>
                        <div className='flex flex-wrap px-20'>
                            <div className='flex px-4 py-2 text-slate-500'>
                                <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn size={'35px'} className='text-slate-700'/>
                                </a>
                            </div>
                            <div className='flex px-4 py-2 text-slate-500'>
                                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                                    <FaGithub size={'35px'} className='text-slate-700'/>
                                </a>
                            </div>
                            <div className='flex px-4 py-2 text-slate-500'>
                                <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter size={'35px'} className='text-slate-700'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Home
