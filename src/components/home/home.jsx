import './home.css';
import React, {lazy, useEffect, useState} from 'react';
import bgImg from '../../assets/l_salmon.jpg';
const SocialIcons = lazy(() => import('../_shared/socialIcons'));

const Home = () => {

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
                        <p className={`text-2xl ${fadeIn} ${fadeProp.fade}`}>Technical Leader / Frontend Developer</p>
                        <h1 className={`pt-5 pb-8 text-5xl md:text-7xl font-bold ${fadeIn}`}>
                            Mathias Skovgaard
                        </h1>
                    </div>
                    <div
                        className={`flex font-poppins uppercase tracking-[5px] bg-yellow-100 text-xs md:text-xl px-[6px] md:px-[35px] py-[20px] h-[55px] md:h-[70px] shadow-xl ${fadeIn}`}>
                        <p>
                            I AM
                        </p>
                        <div className='grid ml-[8px] overflow-hidden'>
                            <p className="text-scroll underline">A Leader</p>
                            <p className="text-scroll underline">Dependable</p>
                            <p className="text-scroll underline">Selfless</p>
                            <p className="text-scroll underline">A Mentor</p>
                            <p className="text-scroll underline">A Communicator</p>
                            <p className="text-scroll underline">A Leader</p>
                        </div>
                    </div>
                </div>

                <div className={`relative w-full md:max-w-[474px] sm:max-w-[650px] overflow-hidden ${fadeIn}`}>
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-500 to-green-500 spinner border-4 border-transparent border-t-4 border-opacity-50 rounded-full">
                    </div>
                    <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-full">
                        <img className="p-1 relative top-0 left-0 w-full h-full object-cover rounded-full" src={bgImg}
                             alt="Salmon img"/>
                    </div>
                </div>

                <div className='absolute bottom-[1%] sm:bottom-[5%] left-0 right-0 flex justify-center'>
                    <div
                        className={`flex flex-col py-8 mx-1 bg-zinc-200 border border-slate-300 rounded-xl shadow-xl ${fadeIn}`}>
                        <div className={'px-20'}>
                            <SocialIcons color={'text-slate-700'}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Home
