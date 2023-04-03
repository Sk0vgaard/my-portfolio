import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const linkedInUrl = "https://www.linkedin.com/in/mathias-skovgaard/";
const githubUrl = "https://github.com/Sk0vgaard";
const twitterUrl = "https://twitter.com/sk0vgaard";

const SocialIcons = ({color}) => (
    <div className='flex justify-between flex-wrap'>
        <div className='flex px-4 py-2 text-slate-500'>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={'30px'} className={`${color}`} />
            </a>
        </div>
        <div className='flex px-4 py-2 text-slate-500'>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub size={'30px'} className={`${color}`} />
            </a>
        </div>
        <div className='flex px-4 py-2 text-slate-500'>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <FaTwitter size={'30px'} className={`${color}`} />
            </a>
        </div>
    </div>
);

export default SocialIcons;
