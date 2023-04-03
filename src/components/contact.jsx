import React, {useState} from 'react';
import {FaEnvelope, FaLinkedinIn, FaPaperPlane, FaPhone, FaLocationArrow} from "react-icons/fa";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameValid, setNameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [messageValid, setMessageValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({name, email, message});
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        setNameValid(event.target.value.trim().length > 0);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setEmailValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value.trim()));
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        setMessageValid(event.target.value.trim().length > 0);
    };

    return (
        <div name='contact' className='w-full text-white my-24'>
            <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
            <div className='max-w-[1240px] mx-auto py-12'>
                <div className='text-center py-8 text-slate-300'>
                    <h2 className='text-3xl uppercase'>Contact</h2>
                    <h3 className='text-4xl uppercase font-bold text-white py-8'>Get in Touch</h3>
                    <p className='text-xl m-2'>
                        I'm Mathias Skovgaard, a passionate software developer with a strong background in frontend
                        technologies, project management, and agile methodologies.
                        I love connecting with fellow tech enthusiasts, sharing knowledge, and exploring new
                        opportunities to create amazing digital experiences.
                        If you're interested in discussing a potential collaboration, project, or just want to chat
                        about the latest industry trends, feel free to get in touch.
                        I'm always excited to meet new people and learn from each other!
                    </p>
                </div>

                <div className='grid md:grid-cols-2'>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <iframe
                            title="Esbjerg Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21509.365839376307!2d8.453391751188379!3d55.481952630348246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b20a619e30ce9%3A0xdde847ab4e4ae9d1!2sEsbjerg!5e0!3m2!1sda!2sdk!4v1680452263025!5m2!1sda!2sdk"
                            width="100%"
                            height="300"
                            className="rounded-xl"
                            loading="lazy"
                            style={{border: 0}}
                        ></iframe>
                        <div className='text-2xl'>
                            <p className='flex py-4'><FaLocationArrow
                                className='w-8 mr-5 text-blue-600 flex-shrink-0'/> Esbjerg, Denmark</p>
                            <a href='https://www.linkedin.com/in/mathias-skovgaard/' target="_blank"
                               className='flex py-4' rel="noreferrer"><FaLinkedinIn
                                className='w-8 mr-5 text-blue-600 flex-shrink-0'/> in/mathias-skovgaard</a>
                            <p className='flex py-4'><FaEnvelope
                                className='w-8 mr-5 text-blue-600 flex-shrink-0'/> Contact me through the contact form
                            </p>
                            <p className='flex py-4'><FaPhone className='w-8 mr-5 text-blue-600 flex-shrink-0'/> For a
                                phone conversation, please provide your contact number in the form. </p>
                        </div>
                    </div>
                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <p className='text-2xl py-8 text-slate-500'>Please feel free to drop me a message, and I'll get
                            back to you as soon as possible.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={handleMessageChange}
                                    className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button
                                className='w-full py-4 my-4 flex items-center justify-center bg-slate-700 text-white rounded hover:bg-slate-900 focus:outline-none focus:ring focus:ring-slate-300 disabled:bg-gray-300 disabled:cursor-not-allowed'
                                disabled={!nameValid || !emailValid || !messageValid}>
                                Send mail
                                <div className={'pl-1'}>
                                    <FaPaperPlane className="h-5 w-5 mr-2 transform rotate-90"/>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
