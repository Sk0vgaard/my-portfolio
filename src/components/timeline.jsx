import React from 'react';
import JobTimeline from "./jobTimeline";

const Timeline = () => {
    const jobs = [
        {
            workplace: "Bankdata",
            jobTitle: "Senior Software Developer",
            fromDate: "Feb 2022",
            toDate: "Jan 2023 - Present",
            description:
                "I Februar 2022 var jeg med til at opstartet et nyt team i Bankdata under afdelingen Kort & Indenlandske Betaling, hvor vi kommer til at have fokus på Angular. Her skal vi bl.a sørge for OnBoarding af nye, samt eksisterende teams, standarder, best-practices og ikke mindst være med til at skabe et godt udviklingsmiljø. Vi kommer til at arbejde på tværs af Bankdata, hvor vi bl.a. kommer indover Den Digitale Relationsbanken, Medarbejderportalen og Netbank Erhverv.",
            workplaceLink: "test",
        },
        {
            workplace: "Bankdata",
            jobTitle: "Teknisk Product Owner / Frontend Engineer",
            fromDate: "Feb 2022 - Present",
            toDate: "",
            description:
                "I Februar 2022 var jeg med til at opstartet et nyt team i Bankdata under afdelingen Kort & Indenlandske Betaling, hvor vi kommer til at have fokus på Angular. Her skal vi bl.a sørge for OnBoarding af nye, samt eksisterende teams, standarder, best-practices og ikke mindst være med til at skabe et godt udviklingsmiljø. Vi kommer til at arbejde på tværs af Bankdata, hvor vi bl.a. kommer indover Den Digitale Relationsbanken, Medarbejderportalen og Netbank Erhverv.",
            workplaceLink: "",
        },
        {
            workplace: "Bankdata",
            jobTitle: "Full Stack Developer",
            fromDate: "May 2021",
            toDate: "Jan 2023",
            description: "test",
            workplaceLink: "",
        },
        {
            workplace: "Bankdata",
            jobTitle: "Full Stack Develope2r",
            fromDate: "May 2021",
            toDate: "Jan 2023",
            description: "test",
            workplaceLink: "",
        },
        {
            workplace: "EG A/S",
            jobTitle: "Full Stack - Developer",
            fromDate: "Aug 2020",
            toDate: "May 2021",
            description:
                "I Februar 2022 var jeg med til at opstartet et nyt team i Bankdata under afdelingen Kort & Indenlandske Betaling, hvor vi kommer til at have fokus på Angular. Her skal vi bl.a sørge for OnBoarding af nye, samt eksisterende teams, standarder, best-practices og ikke mindst være med til at skabe et godt udviklingsmiljø. Vi kommer til at arbejde på tværs af Bankdata, hvor vi bl.a. kommer indover Den Digitale Relationsbanken, Medarbejderportalen og Netbank Erhverv.",
            workplaceLink: "",
        },
        {
            workplace: "EG A/S",
            jobTitle: "Scrummaster",
            fromDate: "Jun 2020",
            toDate: "May 2021",
            description: "",
            workplaceLink: "",
        },
        {
            workplace: "EG A/S",
            jobTitle: "Full Stack - Junior Developer",
            fromDate: "Feb 2019",
            toDate: "Aug 2020",
            description: "",
            workplaceLink: "",
        },
        {
            workplace: "EG A/S",
            jobTitle: "Software Team Lead",
            fromDate: "Sep 2019",
            toDate: "Jun 2020",
            description: "",
            workplaceLink: "",
        },
    ];

    // Group jobs by workplace
    const jobsByWorkplace = jobs.reduce((acc, job) => {
        if (acc[job.workplace]) {
            acc[job.workplace].push(job);
        } else {
            acc[job.workplace] = [job];
        }
        return acc;
    }, {});

    // Create timeline for each workplace
    const timelines = Object.values(jobsByWorkplace).map((jobs) => {
        const workplace = jobs[0].workplace;
        const workplaceLink = jobs[0].workplaceLink;
        const timeline = [];

        jobs.forEach((job) => {
            timeline.push({
                title: job.jobTitle,
                fromDate: job.fromDate,
                toDate: job.toDate,
                description: job.description,
            });
        });

        return {
            workplace,
            workplaceLink,
            timeline,
        };
    });

    console.log(timelines);

    return (
        <div name="timeline" className="p-4">
            <div className="max-w-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                    <h2 className="p-8 text-slate-300 uppercase text-center text-3xl">
                        Timeline
                    </h2>
                    {/*<h3 className="text-5xl font-bold py-6 text-center">*/}
                    {/*    Finding the right team*/}
                    {/*</h3>*/}
                    <JobTimeline timelines={timelines} />
                </div>
            </div>
        </div>
    );
};

export default Timeline;
