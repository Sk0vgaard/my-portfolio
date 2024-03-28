import React from 'react';
import { CompanyTimeline } from '../../interfaces';
import bankdataLogo from '../../assets/logos/bankdata_logo.png';
import egLogo from '../../assets/logos/eg_logo.png';
import bwsLogo from '../../assets/logos/bws_logo.png';
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
                        "As a Senior Frontend Developer at Bankdata, my role extends beyond mere coding to shaping the strategic direction of our frontend technologies. \n" +
                        "I spearhead initiatives to standardize development processes, ensuring a cohesive approach across various platforms. \n" +
                        "My work in crafting extensive documentation and guides not only streamlines the onboarding process but also fosters an environment of continuous learning. \n\n" +
                        "My active participation in strategic discussions allows for the implementation of innovative solutions, further solidifying our commitment to cutting-edge technology and best practices in frontend development."
                },
                {
                    title: "Frontend Alignment Cross Bankdata",
                    fromDate: "Feb 2024",
                    toDate: "Mar 2024",
                    description:
                        "My team and I successfully developed a POC that standardizes new frontend development across Bankdata using the same template. \n" +
                        "This initiative ensures the use of a consistent design framework, pipeline, CDN server, repository, greatly enhancing the Developer Experience & User Experience. " +
                        "The unification across platforms has been widely celebrated by developers at Bankdata, marking a significant step forward in streamlining our development processes."
                },
                {
                    title: "Bridging the Gap in UX Design and Frontend Development at Bankdata",
                    fromDate: "Dec 2023, Christmas Vacation",
                    toDate: "",
                    description:
                        "At Bankdata, I've had an idea of creating a tool that can analyze UX mock-ups and identify what Kirby Components that has been used. This gives the developers the proper tool for creating the best frontend application with the correct components. \n" +
                        "In my free time I played around creating a GPT, a POC that could save a lot of time in our frontend development process. \n" +
                        "As a result, it has become an important tool for some developers and the fact that time can save on project completion and adherence to high-quality standards. \n" +
                        "Furthermore, KirbyGPT's integration with GitHub and the official documentation + its educational benefits support my responsibilities as Angular Guild Coordinator, elevating our coding standards and best practices. \n\n" +
                        "chat.openai.com: <a style='color: deepskyblue' href='https://chat.openai.com/g/g-SH6xqAaFR-kirbygpt' target='_blank'><u>KirbyGPT</u></a> \n" +
                        "Promo Video Created With AI: <a style='color: deepskyblue' href='https://ai.invideo.io/watch/Xk87VzhSTHH' target='_blank'><u>Elevate Frontend Development with KirbyGPT</u></a>"
                },
                {
                    title: "Angular Guild Coordinator",
                    fromDate: "Aug 2021",
                    toDate: "April 2024",
                    description:
                        "In my role as the Angular Guild Coordinator at Bankdata, I've played a critical part in fostering a collaborative tech culture by uniting diverse teams to share insights, tackle challenges, and embrace cutting-edge practices and technologies within the Angular ecosystem. \n" +
                        "My efforts have significantly contributed to a unified approach towards Angular development, ensuring consistency and excellence across projects. \n" +
                        "Even after organizational changes, my ongoing involvement in the Angular Guild underscores my commitment to continuous learning, mentorship, and driving the adoption of best practices, positioning Bankdata at the forefront of technology innovation. \n\n" +
                        "<i>After a new organization rotation, another team should take the overall responsibility for the Angular Stack.</i>",
                },
                {
                    title: "Technical Product Owner",
                    fromDate: "Feb 2022",
                    toDate: "Feb 2024",
                    description:
                        "As a \"Technical Product Owner\" at Bankdata, I've played a pivotal role in establishing a new frontend-focused team within Cards & Payments Area. \n\n" +
                        "My contributions have been crucial in the onboarding of both new and existing teams, standardization, and the creation of an optimal development environment. \n" +
                        "My work also involved planning the repatriation of frontend development, technical considerations for new developments, and collaborating with POs, PMs, and department leaders. \n" +
                        "I served as a bridge between technology and product, ensuring reusable code, scalability, and exceeding project expectations. \n\n" +
                        "My team and I were viewed as knowledge experts and key stakeholders, supporting other areas and teams in crafting the best solutions. \n\n" +
                        "I've acted as a valuable resource across the organization, driving a strong technical culture, passionate about leading and motivating teams towards shared goals, fostering innovation, and contributing to professional development and mentoring. \n\n" +
                        "<i>After the new organization rotation of teams, I stopped as Tech PO, since the teams responsibility changed to be more product oriented with focus on the Tech part.</i>",
                },
                {
                    "title": "New Frontend Team in Card & Payments Area",
                    "fromDate": "Feb 2022",
                    "toDate": "Feb 2024",
                    "description":
                        "After leading the Frontend Development at the Fredericia location and demonstrating significant impact, I was presented with the opportunity to pioneer a new Frontend Team for the Card & Payments area at Bankdata. \n" +
                        "Recognizing the need for specialized frontend expertise in upcoming major projects, I leveraged my network to assemble a team of 4 skilled developers within 3 months, marking the rapid establishment of a dedicated Frontend Team named \"Bankular\". \n\n" +
                        "My role extended beyond team assembly; I spearheaded the onboarding process for new and existing teams, imparting knowledge on frontend development standards and best practices. \n" +
                        "My efforts were instrumental in fostering a unified developer environment, ensuring that our three main platforms benefited from alignment and consistency in frontend practices. \n\n" +
                        "This initiative not only filled a critical gap in the Card & Payments area but also strengthened Bankdata's overall frontend development capabilities."
                },
                {
                    title: "Angular Onboarding",
                    fromDate: "Jan 2023",
                    toDate: "Feb 2024",
                    description:
                        "From Jan-Oct 2023 I went through onboarding of <u>8 teams</u> in Bankdata, on how to start Angular Development. \nBut I wanted to reach even further, so I aligned with my team to create Angular Onboardings as a course of 5 days, for Developers to join. \n\n" +
                        "In October 2023, we celebrated a key milestone at Bankdata with the successful completion of our first Angular onboarding for one of our three platforms. \n" +
                        "The onboarding was structured into three parts: " +
                        "\n- Introduction and Overview (covering project creation, frontend mocking, documentation, and hands-on tasks with smart & dumb components) " +
                        "\n- Hands-On with Angular (providing an assignment that provided the whole 'Angular' experience) " +
                        "\n- Quality Assurance, Assignment Review, and Integration \n" +
                        "   - Reviewing the assignment code \n" +
                        "   - Pair Programming between my developers and the onboardies \n" +
                        "   - In-depth testing with Jest and Spectator \n\n" +
                        "With 14 developers participating on short notice, the engagement level was extraordinary. \n" +
                        "The OnBoarding did not only strengthen our Angular Community within Bankdata, but also made sure that strong bonds and network has been created. \n\n" +
                        "The Teams joined were thrilled for the onboarding and very grateful. Furthermore, developers who were about to create their first Frontend Application estimated that multiple weeks has been saved. \n\n" +
                        "<i>After a new organization rotation of teams, our team stopped onboarding of new developers in Angular. This responsibility were instead handled from another team.</i>",
                },
                {
                    "title": "Angular Template Automation",
                    "fromDate": "Jun 2021",
                    "toDate": "Feb 2024",
                    "description":
                        "Developed and implemented an automation process for generating Angular applications according to company standards, reducing the initial setup time from 4-5 days to just 3 minutes. \n\n" +
                        "This innovation has been utilized 50 times, significantly streamlining project kickoffs. Additionally, I engineered an automated upgrade process for this template, which has been applied 20 times, further enhancing developer productivity. \n\n" +
                        "Overall, this automation has saved MANY HOURS of development time. Thereby projects has been accelerating faster and resources has been optimized across the development teams."
                },
                {
                    "title": "Reusable Angular Components Library",
                    "fromDate": "Jun 2021",
                    "toDate": "Feb 2024",
                    "description":
                        "Initiated and developed a community-driven library of reusable Angular Material components at Bankdata, adopted by over 20 development teams. \n\n" +
                        "This strategic initiative addressed the inefficiency of 'reinventing the button' by providing UX-approved, standardized components for faster development cycles and cohesive user experiences across the platform. \n\n" +
                        "The library significantly eased the onboarding process for new developers, streamlined updates through centralized changes, and fostered a culture of collaboration and innovation within the Angular community. " +
                        "Although quantifying the exact time saved is challenging, the alignment of our platforms and the enthusiastic adoption by developers underscore the library's substantial contribution to enhancing productivity and fostering a standardized development approach."
                },
                {
                    title: "Operational Excellence Days",
                    fromDate: "6. Dec 2023",
                    toDate: "",
                    description:
                        "In December 2023, it was my turn to take the stage at Bankdata's Operational Excellence Days. I led a presentation on front-end onboarding with Angular – and how it's all about getting new developers up and running faster. \n" +
                        "It was important that we're just talking about theory. We want to take them through the whole frontend experience – We showcased how our onboarding in Angular builds upon our backend foundation and how we offer developers an end-to-end experience from the frontend css all the way down to the database. \n\n" +
                        "We delved into the significance of knowledge sharing, the use of reusable code, and the role of our Angular Community in fostering a collaborative and efficient development environment. \n\n" +
                        "We want to enhance developer experience and ensuring a smooth transition for new team members into our dynamic and fast-paced environment. \n" +
                        "This event was not just about sharing our methods; it was about reinforcing our commitment to operational excellence and continuous improvement, as an organisation."
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
                    title: "Frontend Developer",
                    fromDate: "Feb 2022",
                    toDate: "Jan 2023",
                    description:
                        "Building upon my experience and leadership in Frontend Development at the Fredericia location, I transitioned to a role focused exclusively on frontend development. \n\n" +
                        "This shift was a strategic move to leverage my strengths and passion for creating intuitive, responsive user interfaces, further embracing my expertise in Angular and other modern web technologies. \n" +
                        "In this period, I not only contributed significantly to our projects' success through innovative solutions and enhancements, but also played a role in mentoring junior developers and advocating for best practices in frontend architecture. \n\n" +
                        "My dedication to excellence in frontend development enabled more efficient project execution, elevated user experience across our applications, and reinforced the importance of specialized roles within our development teams."
                },
                {
                    title: "Full Stack Developer",
                    fromDate: "May 2021",
                    toDate: "Jan 2023",
                    description:
                        "Joined a team focused on managing Message Services, including SMS and Emails in Bankdata. \n" +
                        "I quickly adapted and became an integral part of the team. " +
                        "My agility and swift learning curve enabled me to contribute significantly in a short period. " +
                        "I didn't just settle into the team; I made an impact by undertaking three major rewrites of frontend applications, enhancing their performance and reliability. " +
                        "This phase of my career was marked by rapid development and substantial contributions to the team's success.",
                },
            ],
        },
        {
            companyName: "EG A/S",
            startDate: "Feb 2019",
            endDate: "May 2021",
            companyLink: "https://eg.dk/offentlig-digitalisering/eg-sensum-one/",
            companyIcon: `${egLogo}`,
            details: [
                {
                    title: "Full Stack Developer",
                    fromDate: "Aug 2020",
                    toDate: "May 2021",
                    description:
                        "My promotion from Junior Developer to Full Stack Developer was a recognition of not only my technical knowledge but also my commitment to taking substantial responsibility within the team. \n" +
                        "My shown a level of ownership over projects by delivering high-quality code and solutions. \n\n" +
                        "My ability to work independently, coupled with a proactive approach to problem-solving, allowed me to contribute significantly to our teams success. \n" +
                        "This period was marked by my mature attitude towards software development, focusing on writing clean, efficient, and maintainable code, which laid the foundation for future leadership roles and furthered my development as a key asset to the team."
                },
                {
                    title: "Established EG's Polish Team",
                    fromDate: "Aug 2020",
                    toDate: "",
                    description:
                        "In August 2020, I led the initiation of a new team in Poland for EG - Digital Welfare, starting with two developers and aiming for larger scaling. \n" +
                        "My role was to harmonize workflows between Danish and Polish teams, refine our Scrum processes, and foster a collaborative and agile environment, marking a big step in both organizational and personal growth"
                },
                {
                    title: "Scrum Master (part time)",
                    fromDate: "Jun 2020",
                    toDate: "May 2021",
                    description:
                        "After EG A/S were bought of Francisco Partners, they decided invest in the company to be more Agile. Therefore the Teamlead role were decommissioned and Scrum Masters were introduced. \n" +
                        "I started to educate my self to help the team improve and to have the best possible Scrum Events, Tracking progress/Metrics, removing impediments and fostering collaboration between developers and teams. \n" +
                        "We had continuous improvement in our Scrum Processes and a lot had to be worked on since the company was not mature in Agile Development, at that time."
                },
                {
                    title: "Software Teamlead (part time)",
                    fromDate: "Sep 2019",
                    toDate: "Jun 2020",
                    description:
                        "Within 3 months at EG, I ascended to the role of Teamlead for a dynamic team of 8 developers and a QA, steering project planning, coordination, and managerial communications. \n" +
                        "The management has seen how I lead and managed the team after our former Teamlead left, and wished for me to continue despite my only 3 months experience. \n" +
                        "My position were more than just a leader, I facilitated workflow enhancements, served as a managerial bridge without direct personnel oversight. " +
                        "This role allowed me to blend technical leadership with strategic oversight, ensuring our team not only met but exceeded our goals. \n\n" +
                        "<i>All this while still being able to code and improve my self as a developer.</i> \n\n" +
                        "Article: " +
                        "<a style='color: deepskyblue' href='https://www.linkedin.com/posts/mathias-skovgaard_jeg-ville-lige-dele-denne-fine-artikel-omkring-activity-6683082058618679296-yufu?utm_source=share&utm_medium=member_desktop' target='_blank'><u>LinkedIn</u></a> / " +
                        "<a style='color: deepskyblue' href='https://www.toha.dk/filer/Datamatiker_Toender.pdf' target='_blank'><u>Erhvervsakademiet SydVest - Page 10</u></a>",
                },
                {
                    title: "Full Stack - Junior Developer",
                    fromDate: "Feb 2019",
                    toDate: "Aug 2020",
                    description:
                        "\"EG - Digital Welfare\" were my first job as a Software Developer. \n\n" +
                        "I worked with FMK (Fælles Medicinkort), that helps places of residence to administrative medicine. \n" +
                        "Futhermore I worked on Sensum One a system that structuring of social welfare efforts, emphasizing automation, oversight, and collaboration across the special needs sector. " +
                        "It brought a unified approach to social welfare work, ensuring coherence and a comprehensive overview across various services, ultimately enhancing life through measurable interventions. " +
                        "This dual engagement not only honed my software development skills, but I could also use my experience and understanding for the user-centered solutions from my time as a Social & Health Worker.",
                },
            ],
        },{
            companyName: "Blue Water Shipping",
            startDate: "Aug 2018",
            endDate: "Jan 2019",
            companyLink: "https://www.bws.net/da/om-blue-water",
            companyIcon: `${bwsLogo}`,
            details: [
                {
                    title: "Frontend, Main Assignment",
                    fromDate: "Nov 2018",
                    toDate: "Jan 2019",
                    description:
                        "Our final year project for Blue Water Shipping focused on upgrading their existing front-end frameworks developed in AngularJS to Angular-7 with Typescript. \n" +
                        "We aimed to deliver a strategic upgrade plan for their front-ends, showcasing the transition to a more type-strong language by upgrading their \"Work Order Management\" WebApp and the importance of fully tested frontend applications. \n" +
                        "This included not just an upgraded version of the frontend but also comprehensive documentation of the upgrade process and new frontend architecture to facilitate the transition for Blue Water Shipping's developers to the modern Angular framework."
                },
                {
                    title: "Full Stack - Intern",
                    fromDate: "Aug 2018",
                    toDate: "Oct 2018",
                    description:
                        "\n" +
                        "During my internship at Blue Water Shipping, I was actively engaged in enhancing operational efficiency and software functionality. \n" +
                        "I contributed to various projects, including developing <b>K</b>ey <b>P</b>erformance <b>I</b>ndicator (KPI) reports and improving email communication systems for shipping details. \n" +
                        "My tasks involved SQL database management, implementing new stored procedures, and refining data representation in Excel reports for better decision-making. \n" +
                        "This period was instrumental in honing my technical skills, particularly in SQL, and understanding the intricacies of logistics and supply chain management software solutions."
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
