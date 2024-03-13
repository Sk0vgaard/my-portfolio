import React from 'react';
import profileImg from './../assets/profile_pic.jpg';

function useAgeCalculator(birthdate) {
    const birthdayCalculator = () => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();

        // Check if the birthday hasn't occurred yet this year
        if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    };

    return birthdayCalculator();
}

const About = () => {
    const birthDate = '1990-11-19'
    const age = useAgeCalculator(birthDate);

    return (
        <div name="about" className="w-full my-20">
            <div className="max-w-[1240px] mx-auto">
                <div className="bg-gray-200 p-8 rounded-lg shadow-md">
                    <div className="text-center">
                        <h2 className="pb-10 text-5xl font-bold">Biography</h2>
                    </div>

                    <div className="flex justify-center pb-5 mb-6">
                        <div
                            className="relative aspect-w-1 aspect-h-1 w-[250px] overflow-hidden rounded-full border-4 border-white shadow-lg">
                            <img src={profileImg} alt="Profile" className="w-full h-full object-cover"/>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-8">
                        <div className="text-center text-gray-200">
                            <p>
                                My name is Mathias Skovgaard, a {age}-year-old passionate software developer based in
                                the beautiful city of Esbjerg, Denmark.
                            </p>
                            <p>
                                I specialize in creating high-quality, interactive websites and applications using
                                modern technologies.
                            </p>
                            <br/>
                            <p>
                                I am always eager to learn and stay up-to-date with the latest developments in the tech
                                world, which allows me to deliver cutting-edge solutions to my clients. I enjoy
                                collaborating with teams and individuals from various backgrounds, as I believe that
                                diversity fosters creativity and innovation.
                            </p>
                            <br/>
                            <p>
                                In my spare time, I love exploring Esbjerg's idyllic landscapes and engaging in outdoor
                                activities. I also appreciate connecting with fellow professionals who share my
                                enthusiasm for technology, programming, AI and nature.
                            </p>
                            <br/>
                            <p>
                                I will always prefer to be judged by my achievements and the esteem of my colleagues
                                above all else.
                                <br/>
                                <i>Actions and integrity carry more weight than words.</i>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Interests</h3>
                            <ul className="list-disc pl-5">
                                <li>Angler for salmon and sea trout in southwest Jutland brooks</li>
                                <li>Exploring new technology in my free time</li>
                                <li>Process optimization both in private and at work</li>
                                <li>Friends are a huge part of my persona</li>
                                <li>AI is a huge interest for me, and I spend multiple hours each day on either
                                    research, playing, or keeping track of all the new things
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Skills & Qualities</h3>
                            <ul className="list-disc pl-5">
                                <li>Embracing challenges and self-improvement</li>
                                <li>Structured and diligent in documentation</li>
                                <li>Adaptability and willingness to learn new technologies</li>
                                <li>Leadership and mentoring skills</li>
                                <li>Empathy, communication skills, and teamwork from a social & health worker
                                    background
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">My Career</h3>
                        <p className="mb-2">
                            Throughout my journey, I've embraced numerous roles at EG A/S and Bankdata.
                        </p>
                        <p className="mb-2">
                            My diverse experiences enabled me to lead significant initiatives like introducing frontend development to the Card & Payments area at Bankdata, highlighting my ability to drive innovation and foster collaboration.
                        </p>
                        <p className="mb-2">
                            I've initiated and led the AI Community at Bankdata, and my leadership extended to roles as Technical Product Owner and Angular Guild Coordinator, where I championed best practices and mentored teams.
                        </p>
                        <p className="mb-2">
                            This journey reflects my adaptability, technical expertise, and passion for shaping a collaborative and forward-thinking tech environment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
