import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [bgColor, setBgColor] = useState('bg-blend-color');
    const [headerColor, setHeaderColor] = useState('text-zinc-100');
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 800) {
                setBgColor('bg-zinc-100');
                setHeaderColor('text-zinc-900')
            } else {
                setBgColor('bg-blend-color');
                setHeaderColor('text-zinc-100')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`w-screen h-[80px] z-10 ${bgColor} fixed drop-shadow-lg`}>
            <div className='px-2 flex justify-between item-center w-full h-full'>
                <div className='flex items-center pl-10'>
                    <h1 className={`text-3xl font-bold ${headerColor} mr-4 sm:text-3xl`}>Mathias Skovgaard</h1>
                    <ul className='hidden md:flex'>
                        <li><Link className={`cursor-pointer ${headerColor} hover:text-zinc-400`} to='home' smooth={true} duration={500}>Home</Link></li>
                        <li><Link className={`cursor-pointer ${headerColor} hover:text-zinc-400`} to='about' smooth={true} offset={-100} duration={500}>About</Link></li>
                        <li><Link className={`cursor-pointer ${headerColor} hover:text-zinc-400`} to='timeline' smooth={true} offset={-50} duration={500}>Timeline</Link></li>
                        <li><Link className={`cursor-pointer ${headerColor} hover:text-zinc-400`} to='skills' smooth={true} offset={-150} duration={500}>Skills</Link></li>
                        <li><Link className={`cursor-pointer ${headerColor} hover:text-zinc-400`} to='contact' smooth={true} offset={-80} duration={500}>Contact</Link></li>
                    </ul>
                </div>
                {/*<div className='hidden md:flex pr-4'>*/}
                {/*    <button className='border-none bg-transparent text-black mr-4'>Sign In</button>*/}
                {/*    <button className='px-8 py-3'>Sign Out</button>*/}
                {/*</div>*/}
                <div className='md:hidden flex items-center mr-4' onClick={handleClick}>
                    {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5'/>}
                </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>
                <Link onClick={handleClose} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='border-b-2 border-zinc-300 w-full'>
                <Link onClick={handleClose} to='about' smooth={true} offset={-80} duration={500}>About</Link>
            </li>
            <li className='border-b-2 border-zinc-300 w-full'>
                <Link onClick={handleClose} to='timeline' smooth={true} offset={-50} duration={500}>Timeline</Link>
            </li>
            <li className='border-b-2 border-zinc-300 w-full'>
                <Link onClick={handleClose} to='skills' smooth={true} offset={-150} duration={500}>Skills</Link>
            </li>
            <li className='border-b-2 border-zinc-300 w-full'>
                <Link onClick={handleClose} to='contact' smooth={true} offset={-80} duration={500}>Contact</Link>
            </li>
            {/*<div className='flex flex-col my-4'>*/}
            {/*    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>*/}
            {/*    <button className='px-8 py-3'>Sign Out</button>*/}
            {/*</div>*/}
        </ul>

    </div>
  )
}

export default Navbar
