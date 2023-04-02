import React from 'react';
import {FaFacebook, FaGithub, FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Support</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Contact</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Documentation</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Analytics</li>
                        <li className='py-1'>Commerce</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to newsletter</p>
                    <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque id
                        mollitia nesciunt, qui quia sint! Hic incidunt libero magnam.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" placeholder='Enter E-mail'/>
                        <button className='p-2 mb-4'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1240px] px-10 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400'>
                <p className='py-4'>© All rights reserved</p>
                <div className='flex justify-between sm:w-[300px] pt-2 text-3xl'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaGithub/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
