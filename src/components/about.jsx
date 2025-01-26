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
                                My name is Mathias Skovgaard, a {age}-year-old software developer from Esbjerg, Denmark,
                                known for my expertise, dedication, and natural ability to lead informally.
                            </p>
                            <br/>
                            <p>
                                I excel in crafting high-quality, user-friendly applications using cutting-edge
                                technologies. My journey in tech has been marked by a relentless drive for innovation,
                                collaboration, and personal growth. I’ve found that empowering others and seeing them
                                succeed is as fulfilling as delivering innovative technical solutions, making mentorship
                                and team development a core part of my professional philosophy.
                            </p>
                            <br/>
                            <p>
                                I’m passionate about fostering innovation, building communities, and driving technical
                                excellence. Throughout my career, I have led initiatives that align strategic objectives
                                with technical execution, ensuring measurable impact and value.
                            </p>
                            <br/>
                            <p> Outside work, I cherish exploring Esbjerg's salmon fishing in Denmark's rivers, and
                                diving into the ever-evolving world of AI and technology.
                            </p>
                            <br/>
                            <p> Drawing from my background as a <b>Social Healthcare Worker for 7-years</b>, I have
                                honed strong interpersonal skills, empathy, and the ability to connect with others on a
                                deeper level. This blend of technical expertise and human-centered understanding makes
                                me not only a problem solver but also an inspiring team player and leader, capable of
                                fostering collaboration and trust within any team.
                            </p>
                            <br/>
                            <p>
                                My mantra is simple. Actions and integrity speak louder than words.
                                <br/>
                                <i> - I strive to be judged by my achievements and the respect of those I work with
                                    above
                                    all else. </i>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div><h3 className="text-xl font-semibold mb-2">Interests</h3>
                            <ul className="list-disc pl-5">
                                <li>Salmon and sea trout fishing in southwest Jutland's rivers</li>
                                <li>Exploring new technologies and personal projects</li>
                                <li>Engaging with friends and building meaningful connections</li>
                                <li>Diving into AI research, trends, and practical applications</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Skills & Qualities</h3>
                            <ul className="list-disc pl-5">
                                <li>Leadership: Building high-performing, collaborative teams</li>
                                <li>Mentorship: Developing and guiding individuals to achieve excellence</li>
                                <li>Technical Expertise: Balancing technical depth with strategic alignment</li>
                                <li>Empathy: Leveraging my background as a Social & Health Worker to connect and
                                    communicate effectively
                                </li>
                                <li>Structured Problem Solving: Delivering high-quality solutions under tight
                                    deadlines
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6"><h3 className="text-xl font-semibold mb-2">
                        My Career
                    </h3>
                        <p className="mb-2">
                            With a proven track record at both EG A/S and Bankdata, I have taken on diverse and
                            challenging roles that blend technical leadership, innovation, and mentorship.
                        </p>
                        <p className="mb-2">
                            At Bankdata, I spearheaded critical initiatives such as founding dedicated teams in areas
                            like Cards & Payments, leading the AI Community, and coordinating Angular Guilds. These
                            roles highlight my ability to foster alignment, drive innovation, and create lasting
                            organizational impact.
                        </p>
                        <p className="mb-2">
                            My technical expertise is matched by my adaptability and strategic vision. I have
                            successfully delivered high-stakes projects such as rewriting BetalingsService under tight
                            deadlines, pioneering frontend automation for scalability, and shaping the international
                            payments ecosystem with cutting-edge solutions.
                        </p>
                        <p className="mb-2"> My career reflects my passion for transforming technical challenges into
                            innovative solutions and my dedication to fostering collaborative, forward-thinking
                            environments that empower individuals and teams.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
