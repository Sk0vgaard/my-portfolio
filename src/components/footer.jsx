import React, {lazy} from 'react';
import tailwind from '../assets/logos/tailwind.png'
import react from '../assets/logos/react.png'
import firebase from '../assets/logos/firebase.png'

const SocialIcons = lazy(() => import('./_shared/socialIcons'));


const Footer = () => {
    return (
        <div className="w-full mt-24 bg-slate-900 py-8 px-2">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b-2 border-gray-600 py-8">
                <div className="flex items-center justify-center h-full">
                    <h1 className="text-xl font-semibold mb-4 text-center text-gray-400 m-0">
                        This website has been created with
                    </h1>
                </div>

                <div className="flex justify-center">
                    <img src={react} alt="React" style={{width: '100px', height: '40px'}}/>
                    <img src={tailwind} alt="Tailwind CSS" style={{width: '130px', height: '40px'}}/>
                    <img src={firebase} alt="Firebase" style={{width: '140px', height: '40px'}}/>
                </div>
            </div>

            <div
                className="flex flex-col max-w-[1240px] px-10 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400">
                <p className="py-4">© All rights reserved</p>
                <SocialIcons></SocialIcons>
            </div>
        </div>
    );
};

export default Footer;
