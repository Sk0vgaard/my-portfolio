import React from 'react';
import JobTimeline from "./jobTimeline";
import bankdataLogo from '../assets/bankdata.png';
import egLogo from '../assets/EG_Logo.png';

const Timeline = () => {
    const jobTimelineArray = [
        // Bankdata
        {
            workplace: "Bankdata",
            jobTitle: "Senior Frontend Developer",
            fromDate: "Jan 2023",
            toDate: "Present",
            description:
                "My primary role is currently on OnBoarding multiple teams in Bankdata. " +
                "I help teams that is in need of assistance." +
                "Making documentations/how-to's etc. that describes our development flow. " +
                "As Senior Developer I started to join a lot of meetings regarding our vision for our platforms and a lot of my points and points is what I am currently working on.",
            workplaceLink: "https://www.bankdata.dk/om/bankdata",
            workplaceIcon: `${bankdataLogo}`,
            technologies: "test",
        },
        {
            workplace: "Bankdata",
            jobTitle: "Technical Product Owner",
            fromDate: "Feb 2022",
            toDate: "Present",
            description:
                "I started up a new team in Bankdata, where our focus were on Angular. \n" +
                "As Technical Product Owner my responsible for leading and guiding a team of software developers and ensuring that projects are completed on time and with high quality. This role requires both technical expertise and leadership skills.",
            technologies: "",
        },
        {
            workplace: "Bankdata",
            jobTitle: "Angular Guild Coordinator",
            fromDate: "Aug 2021",
            toDate: "Present",
            description:
                "I am the coordinator for our Angular Guild, where multiple teams across Bankdata attend. " +
                "Here spent time to find alignments, knowledge sharing, questions and present new technologies and presentations.",
            technologies: "",
        },
        {
            workplace: "Bankdata",
            jobTitle: "Frontend Developer",
            fromDate: "Feb 2022",
            toDate: "Jan 2023",
            description:
                "Our responsibility were to OnBoarding of new and existing teams to teach them about standards, best-practices etc. when develop Frontend Applications. " +
                "Furthermore we made sure to create a good developer environment across Bankdata." +
                "In our team we develop into our three platforms, and making sure that as much as possible is aligned between them.",
            technologies: "",
        },
        {
            workplace: "Bankdata",
            jobTitle: "Full Stack Developer",
            fromDate: "May 2021",
            toDate: "Jan 2023",
            description: "I started in a team where we had the responsibility regarding Message Services. This was regarding SMS, Mail etc.",
            technologies: "",
        },
        // EG
        {
            workplace: "EG A/S",
            jobTitle: "Full Stack - Developer",
            fromDate: "Aug 2020",
            toDate: "May 2021",
            description:
                "I were promoted to Developer because I took a lot of responsibility and had a mature attitude in how to write good code.",
            workplaceLink: "https://eg.dk/om-eg/",
            workplaceIcon: `${egLogo}`,
            technologies: "",
        },
        {
            workplace: "EG A/S",
            jobTitle: "Scrum Master (part time)",
            fromDate: "Jun 2020",
            toDate: "May 2021",
            description:
                "After EG A/S were bought of Francisco Partners they decided invest in the company to be more Agile. Therefore the Teamlead role were decommissioned and Scrum Masters were introduced. " +
                "I started to educate my self to help the team improve and to have the best possible Scrum Events, Tracking progress/Metrics, removing impediments and fostering collaboration between developers and teams. " +
                "We had continuous improvement in our Scrum Processes and a lot had to be worked on since the company was not mature in Agile Development, at that time.",
            workplaceLink: "",
            technologies: "",
        },
        {
            workplace: "EG A/S",
            jobTitle: "Software Teamlead",
            fromDate: "Sep 2019",
            toDate: "Jun 2020",
            description:
                "After only a half year at EG I became Teamlead for a developer team containing 8 developers and a QA. " +
                "I had the responsibility for planning and coordination's and the communication with Manager's.",
            workplaceLink: "",
            technologies: "",
        },
        {
            workplace: "EG A/S",
            jobTitle: "Full Stack - Junior Developer",
            fromDate: "Feb 2019",
            toDate: "Aug 2020",
            description:
                "This were my first job as a Software Developer. " +
                "Here I worked with FMK (Fælles Medicinkort), that helps places of residence to administrative medicine.",
            workplaceLink: "",
            technologies: "",
        },
    ];

    // Group jobs by workplace
    const jobsByWorkplace = jobTimelineArray.reduce((acc, job) => {
        if (acc[job.workplace]) {
            acc[job.workplace].push(job);
        } else {
            acc[job.workplace] = [job];
        }
        return acc;
    }, {});

    // Create timeline for each workplace
    const jobTimelines = Object.values(jobsByWorkplace).map((jobTimelines) => {
        const workplace = jobTimelines[0].workplace;
        const workplaceLink = jobTimelines[0].workplaceLink;
        const workplaceIcon = jobTimelines[0].workplaceIcon;
        const jobs = [];

        jobTimelines.forEach((job) => {
            jobs.push({
                title: job.jobTitle,
                fromDate: job.fromDate,
                toDate: job.toDate,
                description: job.description,
            });
        });

        return {
            workplace,
            workplaceLink,
            workplaceIcon,
            jobs: jobs,
        };
    });

    console.log(jobTimelines);

    return (
        <div name="timeline" className="md:p-4">
            <div className="max-w-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                    <h2 className='p-8 text-5xl font-bold text-center text-slate-700'>TIMELINE</h2>
                    <JobTimeline jobTimelines={jobTimelines} />
                </div>
            </div>
        </div>
    );
};

export default Timeline;
