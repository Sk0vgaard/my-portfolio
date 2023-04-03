import React from 'react';
import {FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa';
import tailwind from './../assets/tailwind.png'
import react from './../assets/react.png'
import firebase from './../assets/firebase.png'


const Footer = () => {
    const linkedInUrl = "https://www.linkedin.com/in/mathias-skovgaard/";
    const githubUrl = "https://github.com/Sk0vgaard";
    const twitterUrl = "https://twitter.com/sk0vgaard";

    return (
        <div className="w-full mt-24 bg-slate-900 py-8 px-2">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b-2 border-gray-600 py-8">
                <div className="flex items-center justify-center h-full">
                    <h1 className="text-xl font-semibold mb-4 text-center text-gray-400 m-0">
                        This website has been created with
                    </h1>
                </div>

                <div className="flex justify-center space-x-4">
                    <img src={react} alt="" className={'h-10'}/>
                    <img src={tailwind} alt="" className={'h-10'}/>
                    <img src={firebase} alt="" className={'h-10'}/>
                </div>
            </div>

            <div
                className="flex flex-col max-w-[1240px] px-10 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400">
                <p className="py-4">© All rights reserved</p>
                <div className='flex justify-between flex-wrap'>
                    <div className='flex px-4 py-2 text-slate-500'>
                        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={'30px'} className='text-slate-400'/>
                        </a>
                    </div>
                    <div className='flex px-4 py-2 text-slate-500'>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={'30px'} className='text-slate-400'/>
                        </a>
                    </div>
                    <div className='flex px-4 py-2 text-slate-500'>
                        <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={'30px'} className='text-slate-400'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
