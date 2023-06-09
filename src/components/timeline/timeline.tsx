import React from 'react';
import {CompanyTimeline} from '../../interfaces';
import bankdataLogo from '../../assets/logos/bankdata.png';
import egLogo from '../../assets/logos/EG_Logo.png';
import JobTimeline from "./jobTimeline";

const Timeline = () => {
    const companyTimelines: CompanyTimeline[] = [
        {
            companyName: "Bankdata",
            startDate: "May 2021",
            endDate: "Present",
            companyLink: "https://www.bankdata.dk/om/bankdata",
            companyIcon: `${bankdataLogo}`,
            details: [
                {
                    title: "Senior Frontend Developer",
                    fromDate: "Jan 2023",
                    toDate: "Present",
                    description:
                        "In my current role as a Senior Frontend Developer, I primarily focus on onboarding multiple teams at Bankdata. \n" +
                        "I assist teams in need of guidance and create documentation and how-to guides to explain our development processes. \n" +
                        "As a Senior Developer, I participate in numerous meetings to discuss the vision for our platforms, and many of the ideas and suggestions I bring to the table are now being implemented.",
                },
                {
                    title: "Technical Product Owner",
                    fromDate: "Feb 2022",
                    toDate: "Present",
                    description:
                        "I took the lead in starting a new team at Bankdata, with a focus on modern frontend frameworks. \n" +
                        "As Technical Product Owner, I am responsible for leading and guiding a team of software developers, ensuring that projects are completed on time and with high quality. " +
                        "This role requires both technical expertise and leadership skills.",
                },
                {
                    title: "Angular Guild Coordinator",
                    fromDate: "Aug 2021",
                    toDate: "Present",
                    description:
                        "As the coordinator for our Angular Guild, I bring together multiple teams from across Bankdata to share knowledge, answer questions, and present new technologies and best practices.",
                },
                {
                    title: "Frontend Developer",
                    fromDate: "Feb 2022",
                    toDate: "Jan 2023",
                    description:
                        "During this period, I was responsible for onboarding new and existing teams, teaching them about standards and best practices for frontend application development. \n" +
                        "My team and I worked to create a cohesive developer environment across Bankdata, ensuring alignment and consistency across our three main platforms.",
                },
                {
                    title: "Full Stack Developer",
                    fromDate: "May 2021",
                    toDate: "Jan 2023",
                    description: "I started in a team responsible for managing Message Services, including SMS and Emails.",
                },
            ],
        },
        {
            companyName: "EG A/S",
            startDate: "Feb 2019",
            endDate: "May 2021",
            companyLink: "https://eg.dk/om-eg/",
            companyIcon: `${egLogo}`,
            details: [
                {
                    title: "Full Stack Developer",
                    fromDate: "Aug 2020",
                    toDate: "May 2021",
                    description:
                        "I were promoted to Developer because I took a lot of responsibility and had a mature attitude on how to write good code.",
                },
                {
                    title: "Scrum Master (part time)",
                    fromDate: "Jun 2020",
                    toDate: "May 2021",
                    description:
                        "After EG A/S were bought of Francisco Partners they decided invest in the company to be more Agile. Therefore the Teamlead role were decommissioned and Scrum Masters were introduced. \n" +
                        "I started to educate my self to help the team improve and to have the best possible Scrum Events, Tracking progress/Metrics, removing impediments and fostering collaboration between developers and teams. \n" +
                        "We had continuous improvement in our Scrum Processes and a lot had to be worked on since the company was not mature in Agile Development, at that time.",
                },
                {
                    title: "Software Teamlead",
                    fromDate: "Sep 2019",
                    toDate: "Jun 2020",
                    description:
                        "After only a half year at EG, I became Teamlead for a developer team containing 8 developers and a QA. \n" +
                        "I had the responsibility for planning and coordination's and the communication with Manager's.",
                },
                {
                    title: "Full Stack - Junior Developer",
                    fromDate: "Feb 2019",
                    toDate: "Aug 2020",
                    description:
                        "\"EG - Digital Welfare\" were my first job as a Software Developer. " +
                        "Here I worked with FMK (Fælles Medicinkort), that helps places of residence to administrative medicine.",
                },
            ],
        },
    ];

    return (
        <div id="timeline" className="md:p-4">
            <div className="max-w-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                    <h2 className='p-8 text-5xl font-bold text-center text-slate-700'>TIMELINE</h2>
                    <JobTimeline companyTimelines={companyTimelines}/>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
