import React from 'react';
import aboutPicture from './../assets/l_salmon.jpg'

const About = () => {
    return (
        <div name='about' className='w-full my-20 '>
            <div className='max-w-[1240px] mx-auto'>
                <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                    <div className='text-center'>
                        <h2 className='pb-10 text-5xl font-bold'>About me</h2>
                    </div>

                    <div className="flex justify-center pb-5 mb-6">
                        <img
                            src={aboutPicture}
                            alt="Profile"
                            className="w-[250px] h-[250px] rounded-full border-4 border-white shadow-lg"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Interests</h3>
                            <ul className="list-disc pl-5">
                                <li>Angler for salmon and sea trout in southwest Jutland brooks</li>
                                <li>Family life in Esbjerg with wife and two daughters</li>
                                <li>Exploring new technology in my free time</li>
                                <li>Process optimization both in private and at work</li>
                                <li>Volunteering at our rivers to improve the fish population</li>
                                <li>Friends is a huge part of my persona</li>
                                <li>Going on trips in the nature with my family</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Skills & Qualities</h3>
                            <ul className="list-disc pl-5">
                                <li>Embracing challenges and self-improvement</li>
                                <li>Structured and diligent in documentation</li>
                                <li>Problem-solving and critical thinking abilities</li>
                                <li>Adaptability and willingness to learn new technologies</li>
                                <li>Leadership and mentoring skills</li>
                                <li>Not afraid to invite open discussions in the plenum to address concerns and clarify misunderstandings</li>
                                <li>Empathy, communication skills, and teamwork from social & health worker background</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Career</h3>
                        <p>
                            Currently, I work as a Senior Software Developer at Bankdata, where I constantly strive to stay updated with the latest technology trends in the market.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;