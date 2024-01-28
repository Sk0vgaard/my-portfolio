import React from 'react';
import aboutPicture from './../assets/l_salmon.jpg'

const About = () => {
    return (
        <div name='about' className='w-full my-20 '>
            <div className='max-w-[1240px] mx-auto'>
                <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                    <div className='text-center'>
                        <h2 className='pb-10 text-5xl font-bold'>Biography</h2>
                    </div>

                    <div className="flex justify-center pb-5 mb-6">
                        <div className="relative aspect-w-1 aspect-h-1 w-[250px] overflow-hidden rounded-full border-4 border-white shadow-lg">
                            <img
                                src={aboutPicture}
                                alt="Profile"
                                className="relative top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
                        <div className={'text-center text-gray-200'}>
                            My name is Mathias Skovgaard, a 32-year-old passionate software developer based in the
                            beautiful city of Esbjerg, Denmark.
                            <br/>
                            I specialize in creating high-quality, interactive websites and applications using modern
                            technologies.
                            <br/>
                            <br/>
                            I am always eager to learn and stay up-to-date with the latest developments in the tech
                            world, which allows me to deliver cutting-edge solutions to my clients. I enjoy
                            collaborating with teams and individuals from various backgrounds, as I believe that
                            diversity fosters creativity and innovation.
                            <br/>
                            <br/>
                            In my spare time, I love exploring Esbjerg's idyllic landscapes and engaging in outdoor
                            activities. I also appreciate connecting with fellow professionals who share my enthusiasm
                            for technology, programming and nature.
                            <br/>
                            <br/>
                            If you'd like to get in touch or discuss potential projects, please feel free to reach out
                            to me through the contact form on this website. For phone conversations, kindly provide your
                            contact number in the form, and I'll be more than happy to give you a call.
                            <br/>
                            <br/>
                            Thank you for taking the time to visit my portfolio, and I'm looking forward to connecting
                            with you soon!
                        </div>
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
                                <li>Not afraid to invite open discussions in the plenum to address concerns and clarify
                                    misunderstandings
                                </li>
                                <li>Empathy, communication skills, and teamwork from social & health worker background
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">My Career</h3>
                        <p>
                            As a dedicated and versatile software developer, I've held various roles, from Scrum Master
                            to my current position as Senior Frontend Developer.
                            <br/>
                            My technical expertise and adaptability have helped me excel in these roles, while also
                            allowing me to take on leadership responsibilities as a Technical Product Owner and Angular
                            Guild Coordinator.
                            <br/>
                            My ability to communicate, mentor, and foster collaboration across teams highlights my
                            well-rounded skills and passion for staying updated with the latest technology
                            trends.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;