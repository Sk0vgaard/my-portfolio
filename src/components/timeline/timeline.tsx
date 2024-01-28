import React from 'react';
import { CompanyTimeline } from '../../interfaces';
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
                    title: "Frontend Alignment Cross Bankdata",
                    fromDate: "Feb 2024",
                    toDate: "Mar 2024",
                    description:
                        "My team and I successfully developed a POC that standardizes new frontend development across Bankdata using the same template. \n" +
                        "This initiative ensures the use of a consistent design framework, pipeline, CDN server, repository, greatly enhancing the Developer Experience. " +
                        "The unification across platforms has been widely celebrated by developers at Bankdata, marking a significant step forward in streamlining our development processes."
                },
                {
                    title: "Bridging the Gap in UX Design and Frontend Development at Bankdata",
                    fromDate: "Dec 2023, Christmas Vacation",
                    toDate: "",
                    description:
                        "At Bankdata, I've had an idea of creating a tool that aids in analyzing UX mock-ups and to identify Kirby Components, to give the developers the proper tool for creating the best frontend application with the correct tools." +
                        "In my free time I played around creating a GPT, a POC that could save a lot of time in our frontend development process. \n" +
                        "As a result, it has become an invaluable tool for some developers and the fact that time can be saved on project completion and adherence to high-quality standards. \n" +
                        "Furthermore, KirbyGPT's integration with GitHub and the official documentation + its educational benefits support my responsibilities as Angular Guild Coordinator, elevating our coding standards and best practices.\n\n" +
                        "Promo Video Created With AI: <a style='color: deepskyblue' href='https://ai.invideo.io/watch/Xk87VzhSTHH' target='_blank'><u>Elevate Frontend Development with KirbyGPT</u></a>"
                },
                {
                    title: "Operational Excellence Days",
                    fromDate: "6. Dec 2023",
                    toDate: "",
                    description:
                        "In December 2023, it was my turn to take the stage at Bankdata's Operational Excellence Days. I led a presentation on front-end onboarding with Angular – and how it's all about getting new developers up and running faster. \n" +
                        "It was important that we're just talking theory here. We took them through the whole experience – We showcased how our onboarding in Angular builds upon our backend foundation, offering developers an end-to-end experience from the frontend css all the way down to the database. \n\n" +
                        "We delved into the significance of knowledge sharing, the use of reusable code, and the role of our Angular Community in fostering a collaborative and efficient development environment. \n\n" +
                        "We want to enhance developer experience and ensuring a smooth transition for new team members into our dynamic and fast-paced environment. \n" +
                        "This event was not just about sharing our methods; it was about reinforcing our commitment to operational excellence and continuous improvement, as a organisation."
                },
                {
                    title: "Bankdata Promotional Video Participation",
                    fromDate: "21. Oct 2023",
                    toDate: "",
                    description:
                        "`In October 2023, I had the privilege of featuring in a promotional video for Bankdata, which was disseminated across various channels. Alongside my fellow developers – we shared our experiences and the excitement of crafting innovative solutions at Bankdata. \n" +
                        "The video highlighted the critical role of our IT infrastructure in the daily lives of Danish citizens, the banking sector, and the safety of society. We emphasized the challenges of delivering a full-service platform in a heavily regulated industry and how it demands excellence in our technologies. \n" +
                        "Our solutions receives <b>a million visits</b> a day, which means that the systems needs to be accessible and robust around the clock. \n\n" +
                        "LinkedIn Post: <a style='color: deepskyblue' href='https://www.linkedin.com/feed/update/urn:li:activity:7115233716439801856/' target='_blank'><u>Bankdata - Vi Bygger Fremtidens Digitale Bank</u></a>"
                },
                {
                    title: "Angular Onboarding",
                    fromDate: "2023",
                    toDate: "Still On Going",
                    description:
                        "From Jan-Oct I went through onboarding of <u>8 teams</u> in Bankdata, on how to start Angular Development. \nBut I wanted to reach even further, so I aligned with my team to create Angular Onboardings as a course of 5 days, for Developers to join. \n\n" +
                        "In October 2023, we celebrated a key milestone at Bankdata with the successful completion of our first Angular onboarding for one of our three platforms. \n" +
                        "The onboarding was structured into three parts: Introduction and Overview (covering project creation, frontend mocking, documentation, and hands-on tasks with smart & dumb components), Hands-On with Angular (providing a full-stack experience task), and Quality Assurance, Task Review, and Integration (focusing on review, pair programming, and in-depth testing with Jest and Spectator). \n" +
                        "With 14 developers participating on short notice, the engagement level was extraordinary. \n" +
                        "The initiative not only strengthened our Angular community within Bankdata but also set the stage for future enhancements in our onboarding process."
                },
                {
                    title: "AI Community Initiation",
                    fromDate: "Oct 2023",
                    toDate: "In Progress",
                    description:
                        "I pioneered the establishment of a new AI community within Bankdata to integrate AI into our processes, developer experience, and workflows. \n" +
                        "I conduct monthly meetings with upper management to present developer cases and progress. Moreover, I have assembled a team of multiple other talented developers for knowledge sharing, showcasing POCs, and ensuring the success and dissemination of innovative ideas. \n" +
                        "My role as a facilitator for these meetings involves preparing agendas and creating action items, earning recognition and support from developers and directors for leading this initiative."
                },
                {
                    title: "Senior Frontend Developer",
                    fromDate: "Jan 2023",
                    toDate: "Present",
                    description:
                        "In my current role as a Senior Frontend Developer, I primarily focus on onboarding multiple teams at Bankdata. \n" +
                        "I assist teams in need of guidance and create documentation and how-to guides to explain our development processes. \n" +
                        "As a Senior Developer, I participate in numerous meetings to discuss the vision for our platforms, and many of the ideas and suggestions I bring to the table has now being implemented. \n",
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
