import React, {useState} from 'react'
import {Link} from 'react-scroll'

import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const handleClose = () => setNav(!nav)

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-100 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between item-center w-full h-full'>
            <div className='flex items-center'>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Velkommen 🤩</h1>
                <ul className='hidden md:flex'>
                    <li><Link className='cursor-pointer hover:text-indigo-600' to='home' smooth={true} duration={500}>Home</Link></li>
                    <li><Link className='cursor-pointer hover:text-indigo-600' to='about' smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link className='cursor-pointer hover:text-indigo-600' to='support' smooth={true} offset={-50} duration={500}>Support</Link></li>
                    <li><Link className='cursor-pointer hover:text-indigo-600' to='platform' smooth={true} offset={-150} duration={500}>Platform</Link></li>
                    <li><Link className='cursor-pointer hover:text-indigo-600' to='pricing' smooth={true} offset={-80} duration={500}>Pricing</Link></li>
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
                <Link onClick={handleClose} to='about' smooth={true} offset={-200} duration={500}>About</Link>
            </li>
            <li className='border-b-2 border-zinc-300 w-full'>
                <Link onClick={handleClose} to='support' smooth={true} offset={-50} duration={500}>Support</Link>
            </li>
            <li className='border-b-2 border-zinc-300 w-full'>
                <Link onClick={handleClose} to='platform' smooth={true} offset={-150} duration={500}>Platform</Link>
            </li>
            <li className='border-b-2 border-zinc-300 w-full'>
                <Link onClick={handleClose} to='pricing' smooth={true} offset={-80} duration={500}>Pricing</Link>
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
