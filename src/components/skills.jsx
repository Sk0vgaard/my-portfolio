import React, { useEffect, useRef, useState } from 'react';

const categories = [
    {
        title: 'Frontend Tools',
        skills: [
            { technologyName: 'TypeScript', knowledge: 8 },
            { technologyName: 'JavaScript', knowledge: 8 },
            { technologyName: 'HTML(5)/CSS', knowledge: 8 },
            { technologyName: 'JSON', knowledge: 8 },
            { technologyName: 'AJAX', knowledge: 8 },
            { technologyName: 'Responsive Web Design', knowledge: 9 },
        ],
    },
    {
        title: 'Frontend Frameworks',
        skills: [
            { technologyName: 'Angular', knowledge: 10 },
            { technologyName: 'React', knowledge: 5 },
            { technologyName: 'AngularJS', knowledge: 6 },
            { technologyName: 'Angular Material', knowledge: 9 },
            { technologyName: 'Bootstrap', knowledge: 8 },
            { technologyName: 'Tailwind', knowledge: 6 },
        ],
    },
    {
        title: 'Backend Tools',
        skills: [
            { technologyName: 'Node.js', knowledge: 8 },
            { technologyName: 'Java', knowledge: 5 },
            { technologyName: 'C#', knowledge: 5 },
            { technologyName: 'C++', knowledge: 3 },
        ],
    },
    {
        title: 'Backend Frameworks',
        skills: [
            { technologyName: 'Spring Boot', knowledge: 6 },
            { technologyName: 'ASP.NET & Core', knowledge: 4 },
        ],
    },
    {
        title: 'UI/UX Design',
        skills: [
            { technologyName: 'User Experience (UX) Design', knowledge: 8 },
            { technologyName: 'User Interface (UI) Design', knowledge: 8 },
            { technologyName: 'Sketch', knowledge: 5 },
            { technologyName: 'Figma', knowledge: 5 },
        ],
    },
    {
        title: 'Database',
        skills: [
            { technologyName: 'Firebase', knowledge: 9 },
            { technologyName: 'SQL', knowledge: 5 },
            { technologyName: 'DB2', knowledge: 5 },
            { technologyName: 'MySQL', knowledge: 4 },
        ],
    },
    {
        title: 'DevOps & Infrastructure',
        skills: [
            { technologyName: 'CI/CD', knowledge: 8 },
            { technologyName: 'Linux', knowledge: 7 },
            { technologyName: 'OpenShift', knowledge: 7 },
            { technologyName: 'Grafana', knowledge: 6 },
            { technologyName: 'Docker', knowledge: 5 },
            { technologyName: 'Jenkins', knowledge: 8 },
            { technologyName: 'Postman', knowledge: 7 },
        ],
    },
    {
        title: 'Version Control & Collaboration',
        skills: [
            { technologyName: 'Jira', knowledge: 10 },
            { technologyName: 'Confluence', knowledge: 9 },
            { technologyName: 'Git', knowledge: 9 },
            { technologyName: 'GitHub', knowledge: 7 },
            { technologyName: 'BitBucket', knowledge: 9 },
            { technologyName: 'Mercurial', knowledge: 5 },
        ],
    },
    {
        title: 'Agile Methodologies',
        skills: [
            { technologyName: 'Scrum', knowledge: 9 },
            { technologyName: 'Kanban', knowledge: 9 },
            { technologyName: 'Extreme Programming', knowledge: 9 },
        ],
    },
    {
        title: 'Legacy Technologies',
        skills: [
            { technologyName: 'Puma', knowledge: 6 },
            { technologyName: 'Struts', knowledge: 4 },
            { technologyName: 'COBOL', knowledge: 2 },
            { technologyName: 'Encode', knowledge: 8 },
        ],
    },
    {
        title: 'Personal Skills',
        skills: [
            { technologyName: 'Communication', knowledge: 10 },
            { technologyName: 'Leadership', knowledge: 8 },
            { technologyName: 'Adaptability', knowledge: 8 },
            { technologyName: 'Critical Thinking', knowledge: 10 },
            { technologyName: 'Problem Solving', knowledge: 9 },
            { technologyName: 'Presentation Skills', knowledge: 8 },
        ],
    },
    {
        title: 'Additional Knowledge',
        skills: [
            { technologyName: 'Android Development'},
            { technologyName: 'Ionic'},
            { technologyName: 'Unity'},
            { technologyName: 'Kubernetes'},
            { technologyName: 'AUTH0'},
            { technologyName: 'Splunk'},
            { technologyName: 'Maven'},
            { technologyName: 'Gradle'},
            { technologyName: 'NoSQL'},
            { technologyName: 'Website hosting'},
        ],
    },
];

const Skills = () => {
    const [animate, setAnimate] = useState({});
    const categoryRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setAnimate((prevAnimate) => ({
                            ...prevAnimate,
                            [entry.target.id]: true,
                        }));
                    } else {
                        setAnimate((prevAnimate) => ({
                            ...prevAnimate,
                            [entry.target.id]: false,
                        }));
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold value based on your preference
        );

        categoryRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            categoryRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <div name="skills" className="w-full my-32">
            <div className="max-w-[1240px] mx-auto px-2">
                <h2 className="text-5xl font-bold text-center">Skills</h2>
                <p className="text-2xl py-8 text-gray-500 text-center">
                    Here are some of my skills adapted to areas I have worked in.
                </p>

                <div className="grid md:grid-cols-2 gap-4 pt-4">
                    {categories.map((category, index) => (
                        <div key={index} className="" ref={(el) => (categoryRefs.current[index] = el)} id={`category-${index}`}>
                            <div className="bg-gray-200 p-8 rounded-lg shadow-md h-full">
                                <h3 className="font-bold text-lg">{category.title}</h3>
                                <ul className="grid md:grid-cols-2 gap-4 pt-4">
                                    {category.skills.map((skill, idx) => (
                                        <li key={idx} className="text-lg pt-2 pb-4">
                                            {skill.technologyName}
                                            {skill.knowledge && skill.knowledge && (
                                                <div className="relative mt-2">
                                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
                                                        <div
                                                            style={{
                                                                width: animate[`category-${index}`] ? `${skill.knowledge * 10}%` : '0%',
                                                                transition: 'width 1s ease-in-out',
                                                            }}
                                                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
                                                        ></div>
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
