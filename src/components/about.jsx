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
    const myBirthDate = '1990-11-19'
    const oldestBirthDate = '2018-02-13'
    const middelBirthDate = '2021-03-29'
    const youngestBirthDate = '2024-06-01'

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
                                My name is Mathias Skovgaard, a {useAgeCalculator(myBirthDate)}-year-old software
                                developer from Esbjerg, Denmark,
                                known for my expertise, dedication, and natural ability to lead informally.
                            </p>
                            <br/>
                            <p>
                                I excel in crafting high-quality, user-friendly applications using cutting-edge
                                technologies. My journey in tech has been marked by a relentless drive for innovation,
                                collaboration, and personal growth - both for my self and those around me.
                            </p>
                            <br/>
                            <p> Passionate about fostering innovation, building communities, and driving technical
                                excellence, I’ve led initiatives that bridge strategic goals with technical execution,
                                ensuring real impact.
                                I enjoy collaborating with teams and individuals from various backgrounds, as I believe
                                that diversity fosters creativity and new ways of thinking to achieve excellence.
                                <br/>
                                For me, leadership is about more than delivering results—it's about enabling others to
                                excel and creating an environment where success is shared. Therefore mentorship and team
                                development are core to my philosophy; since empowering others and see them succeed, is
                                just as meaningful and fulfilling as my own contributions and achievements.
                            </p>
                            <br/>
                            <p> On a personal note, I cherish spending time with my wife and our three wonderful
                                children (♀{useAgeCalculator(oldestBirthDate)}, ♀{useAgeCalculator(middelBirthDate)},
                                ♂{useAgeCalculator(youngestBirthDate)}). Whether it's salmon fishing in Esbjerg’s
                                rivers, exploring the latest AI advancements, or simply enjoying quality family time, I
                                embrace both my personal and professional passions with dedication.
                                <br/>
                                I’m known for my strong work ethic and, at times, my tendency to be a workaholic—I love
                                what I do and constantly strive to push boundaries. My loyalty extends both personally
                                and professionally; I take pride in building long-term relationships, whether with
                                colleagues, friends, or industry connections.
                                <br/>
                                People often find me easy to talk to, and I genuinely enjoy networking and exchanging
                                knowledge. I thrive in environments where collaboration, trust, and shared ambitions
                                drive success.
                            </p>
                            <br/>
                            <p> With a <u>7-year</u> background as a Social Healthcare Worker, I bring strong
                                interpersonal
                                skills, empathy, and a deep understanding of people. This blend of technical expertise
                                and human-centered leadership enables me to foster collaboration, trust, and
                                high-performing teams.
                            </p>
                            <br/>
                            <p>
                                My mantra is simple: Actions and integrity speak louder than words.
                                <br/>
                                <i> - I strive to be judged by my achievements and the respect of those around me above
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
                        <p className="mb-2">
                            My career reflects my passion for transforming technical challenges into
                            the best solutions and my dedication to fostering collaborative, forward-thinking
                            environments that empower individuals and teams.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
