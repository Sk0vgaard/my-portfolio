import React from 'react';
import { CompanyTimeline } from '../../interfaces';
import bankdataLogo from '../../assets/logos/bankdata_logo.png';
import egLogo from '../../assets/logos/eg_logo.png';
import bwsLogo from '../../assets/logos/bws_logo.png';
import milestoneLogo from '../../assets/logos/milestone_logo.png';
import JobTimeline from "./jobTimeline";

const bankdataStartDate: Date = new Date("2021-04-01");
const bankdataEndDate: Date = new Date();
const egStartDate: Date = new Date("2019-02-01");
const egEndDate: Date = new Date("2021-03-01");
const bwsStartDate: Date = new Date("2018-08-01");
const bwsEndDate: Date = new Date('2019-01-01');
const finishEducationDate: Date = new Date('2019-01-01');

const urlText = (url: string, text: string) => {
    return `<a style='color: deepskyblue' href='${url}' target='_blank'><u>${text}</u></a>`;
};
const calculateTotalLength = (startDate: Date, endDate: Date): string => {

    let years: number = endDate.getFullYear() - startDate.getFullYear();
    let months: number = endDate.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }
    const formatWithPlural = (value: number, unit: string): string => {
        if (value <= 0) return "";
        return `${value} ${unit}${value !== 1 ? 's' : ''}`;
    };

    const yearStr: string = formatWithPlural(years, "year");
    const monthStr: string = formatWithPlural(months, "month");

    return [yearStr, monthStr].filter(Boolean).join(", ");
};


const Timeline = () => {

        const companyTimelines: CompanyTimeline[] = [
            {
                companyName: "Milestones of Impact and Inspiration",
                startDate: new Date(finishEducationDate),
                endDate: new Date(),
                totalLength: calculateTotalLength(finishEducationDate, new Date()),
                companyLink: "",
                companyIcon: milestoneLogo,
                details: [
                    {
                        title: "EASV - Upcoming event",
                        fromDate: "Feb 2025",
                        toDate: "",
                        description: {
                            primaryTexts: [
                                "Once again I've been invited to inspire future developers at Business Academy South West (EASV) with a tailored presentation. This time, I'll be focusing on the importance of foundational knowledge in the tech industry and how it can shape a successful career.",
                                "<u>Topic:</u>",
                                "<u>Key Points:</u>",
                                "<u>Discussion Topics:</u>",
                            ],
                            secondaryText: `EASV Website: ${urlText('https://www.easv.dk/da/uddannelser/datamatiker/', 'EASV - Computer Science')}`
                        },
                    },
                    {
                        title: "EASV - A Students Struggle",
                        fromDate: "Mar 2024",
                        toDate: "",
                        description: {
                            primaryTexts: [
                                "<u>Inspiring Future Developers:</u> \nDelivered two tailored presentations at Business Academy South West (EASV) to empower both bachelor's students and aspiring computer scientists.",
                                "<u>Insights on Industry Practices:</u> \nHighlighted Bankdata's vision, Agile methods, tech stack, and unique onboarding practices to showcase how interns grow into valued team members.",
                                "<u>Breaking Barriers for New Learners:</u> \nShared personal challenges, including overcoming steep learning curves and \"Imposter Syndrome,\" encouraging students to embrace growth and persistence.",
                                "<u>Empowering with Tools:</u> \nFocused on leveraging ChatGPT effectively while stressing the importance of foundational knowledge for long-term success in the tech industry.",
                            ],
                            secondaryText:
                                `LinkedIn: ${urlText('https://www.linkedin.com/posts/mathias-skovgaard_today-our-1st-semester-computer-science-students-activity-7117569421727936512-F5HR?utm_source=share&utm_medium=member_desktop', 'LinkedIn Post')}\n` +
                                `EASV Website: ${urlText('https://www.easv.dk/da/uddannelser/datamatiker/', 'EASV - Computer Science')}`
                        },
                    },
                    {
                        title: "Bankdata Promotional Video Participation",
                        fromDate: "Oct 2023",
                        toDate: "",
                        description: {
                            primaryTexts: [
                                "In October 2023, I had the privilege of featuring in a promotional video for Bankdata, which was disseminated across various channels. Alongside my fellow developers – we shared our experiences and the excitement of crafting innovative solutions at Bankdata.",
                                "The video highlighted the critical role of our IT infrastructure in the daily lives of Danish citizens, the banking sector, and the safety of society. We emphasized the challenges of delivering a full-service platform in a heavily regulated industry and how it demands excellence in our technologies.",
                                "Our solutions recieves <u>a million visits</u> a day, which means that the systems needs to be accessible and robust around the clock."
                            ],
                            secondaryText:
                                `LinkedIn Post: ${urlText('https://www.linkedin.com/feed/update/urn:li:activity:7115233716439801856/', 'Bankdata - Vi Bygger Fremtidens Digitale Bank')}`
                        },
                    },
                    {
                        title: "EASV - A Students Struggle",
                        fromDate: "Mar 2021",
                        toDate: "",
                        description: {
                            primaryTexts: [
                                "<u>The Struggle of a Student:</u> Discussed the challenges faced during studies, including steep learning curves and the journey of overcoming obstacles.",
                                "<u>The Importance of a Mentor:</u> Highlighted how having a supportive mentor can accelerate learning, boost confidence, and guide career paths.",
                                "<u>The Value of Networking:</u> Stressed the significance of building strong professional relationships and its impact on long-term career success.",
                                "<u>Learning by Doing:</u> Emphasized hands-on experience as the key to mastering skills and bridging the gap between theory and practice."
                            ],
                            secondaryText:
                                `EASV Website: ${urlText('https://www.easv.dk/da/uddannelser/datamatiker/', 'EASV - Computer Science')}`
                        },
                    },
                    {
                        title: "From Social Healthcare to Tech Leadership",
                        fromDate: "Aug 2019",
                        toDate: "",
                        description: {
                            primaryTexts: [
                                "I transitioned from a social healthcare to a developer with my first job at EG A/S in Odense, where I quickly made my mark. Just two weeks after graduating as a Computer Scientist from EASV in Esbjerg, I joined EG and, within seven months, was promoted to Team Lead.",
                                "In this role, I managed six developers and established a new development team in Warsaw, Poland, fostering cross-border collaboration and productivity. My background in healthcare enabled me to connect with system users, ensuring that our solutions for documentation, goal tracking, and medication management addressed real-world challenges effectively.",
                                "This period was not just about technical growth; it was about bridging the gap between technology and people, learning to lead diverse teams, and delivering systems that truly make a difference."
                            ],
                            secondaryText:
                                `Articles: ${urlText('https://www.linkedin.com/posts/mathias-skovgaard_jeg-ville-lige-dele-denne-fine-artikel-omkring-activity-6683082058618679296-yufu?utm_source=share&utm_medium=member_desktop', 'LinkedIn')}` +
                                " / " +
                                `${urlText('https://drive.google.com/file/d/1cmCszumK59QiiJsWvtSXJuu3JyBQTSpz/view?usp=sharing', 'Erhvervsakademiet SydVest - Page 6')}`
                        },
                    },
                ],
            },
            {
                companyName: "Bankdata",
                startDate: bankdataStartDate,
                endDate: bankdataEndDate,
                totalLength: calculateTotalLength(bankdataStartDate, bankdataEndDate),
                companyLink: "https://www.bankdata.dk/om/bankdata",
                companyIcon: bankdataLogo,
                details: [
                    {
                        title: "Senior Frontend Developer",
                        fromDate: "Jan 2023",
                        toDate: "Present",
                        description: {
                            primaryTexts: [
                                "As a Senior Frontend Developer at Bankdata, my role extends beyond mere coding to shaping the strategic direction of our frontend technologies.",
                                "I spearhead initiatives to standardize development processes, ensuring a cohesive approach across various platforms.",
                                "My work in crafting extensive documentation and guides not only streamlines the onboarding process but also fosters an environment of continuous learning.",
                                "My active participation in strategic discussions allows for the implementation of innovative solutions, further solidifying our commitment to cutting-edge technology and best practices in frontend development."
                            ]
                        },
                    },
                    {
                        title: "Team International Payments (INP)",
                        fromDate: "Jan 2025",
                        toDate: "Present",
                        description: {
                            primaryTexts: [
                                "In January 2025, I became a part of the International Payments (INP) team at Bankdata, contributing to the development and modernization of the international payment platform designed for our back-office clients.",
                                `My role was to lead the frontend development and ensure that we met the challenging deadline for ${urlText('https://www.swift.com/standards/iso-20022/iso-20022-programme/cbpr-roadmap', 'Cross-Border Payments (CBPR+)')}, delivering a platform that meets the highest quality standards for our users.`,
                                "This involved creating new features, modernizing legacy systems (some over 30 years old), and ensuring smooth integration with SWIFT.",
                                "<u>Key areas of focus include:</u>" +
                                "<ul>",
                                "<li>- Developing International Payment Orders.</li>" +
                                "<li>- Enhancing International Payment Transactions.</li>" +
                                "<li>- Generating International Payment Reports.</li>" +
                                "<li>- Collaborating on additional core services critical for global payment processing.</li>" +
                                "</ul>",
                                "I was responsible for shaping the frontend architecture and development while onboarding and mentoring a team that included 3 external consultants, 2 backend developers, and a new frontend developer."
                            ]
                        },
                    },
                    {
                        title: "Team Retail Payment Engagement (RPE)",
                        fromDate: "Sep 2024",
                        toDate: "Jan 2025",
                        description: {
                            primaryTexts: [
                                "Cards at Bankdata, is a key component of the Danish Card Payment System and a cornerstone of the nation's financial infrastructure. ",
                                "A primary objective for joining the Card Team was to lead and rewrite/migrate the existing frontend into a MicroFrontend architecture, enhancing the card application for private customers to deliver an improved platform experience with top quality.",
                                "<u>Key areas of focus include:</u>" +
                                "<ul>" +
                                "<li>- Card Administration and Management for Private, Business, and Advisors </li>" +
                                "<li>- Card Issuing and Acquiring </li>" +
                                "<li>- Integration with GooglePay, ApplePay and GarminPay </li>" +
                                "<li>- Card Security and Fraud Prevention </li>" +
                                "<li>- Card Blocking and Access Control </li>" +
                                "<li>- And more.</li>" +
                                "</ul>",
                                "I held responsibility for the frontend architecture, development, and ensuring the Card area achieved the highest standards of quality and performance.",
                                `Beyond my technical responsibilities, I actively fostered a positive and collaborative team culture by acting as an informal leader. My ability to communicate effectively, provide guidance and motivate my colleagues helped the team exceed expectations while successfully delivering the incremental rewrite of the frontend. This was achieved seamlessly, without disrupting the end-user experience, by leveraging the ${urlText('https://trunkbaseddevelopment.com/branch-by-abstraction/', 'Branch By Abstraction')} approach.`
                            ],
                            secondaryText:
                                "- Following a subsequent organizational restructuring, the RPE team was relocated to Aarhus, and I transitioned to another team.",
                        },
                    },
                    {
                        title: "New Team Formation - Payment Initiation (PAY)",
                        fromDate: "Feb 2024",
                        toDate: "Sep 2024",
                        description: {
                            primaryTexts: [
                                "In February 2024, following a significant organizational reshuffle, I joined the newly formed Payment Initiation (PAY) team at Bankdata. ",
                                "The team's purpose was to centralize and streamline all payment related applications, focusing on the creation and management the payment instructions aspect of the payment process. ",
                                "Our goal was to reduce complexity within the payment ecosystem by consolidating frontend and backend responsibilities into a single team. This also included extracting and unifying scattered frontend development efforts, ensuring alignment and introducing efficiencies across the board. ",
                                "<u>Despite my short tenure in the team, I achieved the following impactful results:</u> <ul>" +
                                "<li> 1. Migrated the payment frontend from a monolithic architecture to a MicroFrontend while extracting the domain from another team.</li>" +
                                "<li> 2. Initiated and kicked off critical deliveries set for 2025.</li>" +
                                "<li> 3. <u>Successfully rewrote and released the PaymentService (BetalingsService)</u> for all our banks in just 6 weeks. This assignment was critical for the 2024 milestone of deploying our private Netbank for Web.<ul></li>" +
                                "<li>• The task was assigned to me with a very short deadline and minimal guidance, and I was simply told to 'Rewrite BetalingsService', which required me to dive deep into understanding a whole new domain, its functionality, and the business context in record time. </li>" +
                                "<li>• Due to the legacy system, no reusable code was available, so I built a brand-new frontend application from scratch.</li>" +
                                "<li>• I handled the entire process independently working as a 'one-man-army' handeling UX design, project management, delivery, alignment with other teams, and ensuring the best possible test coverage for a robust and reliable solution.</li>" +
                                "<li>• Remarkably, I managed to deliver this in record time while balancing immense personal responsibilities, as my wife was due to give birth. Despite everyone believing it couldn't be done, I exceeded expectations, delivering the solution before time, which was highly unexpected and greatly appreciated.</li></ul>",
                                "</ul>",
                                "This role provided me with the opportunity to reshape and enhance the structure, processes, and collaboration within the Payment Initiation area, driving both immediate and long-term impact."
                            ]
                        },
                    },
                    {
                        title: "AI Community Initiation",
                        fromDate: "Oct 2023",
                        toDate: "Jun 2024",
                        description: {
                            primaryTexts: [
                                "I pioneered the establishment of a new AI community within Bankdata to integrate AI into our processes, developer experience, and workflows." +
                                "I conduct monthly meetings with upper management to present developer cases and progress. Moreover, I have assembled a team of multiple other talented developers for knowledge sharing, showcasing POCs, and ensuring the success and dissemination of innovative ideas.",
                                "My role as a facilitator for these meetings involves preparing agendas and creating action items, earning recognition and support from developers and directors for leading this initiative.",
                                "This initiative significantly accelerated the focus on AI within Bankdata, ensuring it became a core component of our technological strategy. We explored cutting-edge tools and solutions, including being among the first test users of GitHub Copilot. This early adoption enabled us to deliver faster and higher-quality code, while I served as an ambassador for GitHub Copilot in our area, helping other teams and developers leverage its capabilities effectively.",
                                "The AI community has been instrumental in fostering a culture of innovation and continuous learning, positioning Bankdata at the forefront of AI integration in the financial sector."
                            ],
                            secondaryText:
                                `Shout-out on LinkedIn: ${urlText('https://www.linkedin.com/posts/illio_github-copilot-at-bankdata-a-great-developer-activity-7257723989421113345-vnFE?utm_source=share&utm_medium=member_desktop', 'LinkedIn Post')}` +
                                "\n\n- After this period, the AI Community was handed over to another team to continue the work, as I will be focusing on other initiatives within my area."
                        },
                    },
                    {
                        title: "Frontend Alignment Across Bankdata",
                        fromDate: "Jan 2024",
                        toDate: "Mar 2024",
                        description: {
                            primaryTexts: [
                                "My team and I successfully developed a Proof of Concept (POC) aimed at standardizing new frontend development across Bankdata by unifying one template.",
                                "This initiative streamlined development workflows by establishing a consistent design framework, optimized pipeline, CDN server, and repository structure. ",
                                "The result significantly improved both Developer Experience (DevX) and User Experience (UX), enabling seamless transitions for developers across various projects and platforms.",
                                "The success of the POC was celebrated by developers and management alike, with widespread implementation across all platforms, setting a new standard for frontend development at Bankdata.",
                                "This project not only fostered collaboration within the organization but also solidified Bankdata’s reputation for leading tech in frontend development within the financial sector."
                            ]
                        },
                    },
                    {
                        title: "Angular Guild Facilitator",
                        fromDate: "Aug 2021",
                        toDate: "April 2024",
                        description: {
                            primaryTexts: [
                                "In my role as the Angular Guild Facilitator at Bankdata, I've played a critical part in fostering a collaborative tech culture by uniting diverse teams to share insights, tackle challenges, and embrace cutting-edge practices and technologies within the Angular ecosystem.",
                                "My efforts have significantly contributed to a unified approach towards Angular development, ensuring consistency and excellence across projects.",
                                "Even after organizational changes, my ongoing involvement in the Angular Guild underscores my commitment to continuous learning, mentorship, and driving the adoption of best practices."
                            ],
                            secondaryText:
                                "- After a new organization rotation, another team should take the overall responsibility for the Angular Stack.",
                        },
                    },
                    {
                        title: "Technical Product Owner",
                        fromDate: "Feb 2022",
                        toDate: "Feb 2024",
                        description: {
                            primaryTexts: [
                                "As a \"Technical Product Owner\" at Bankdata, I've played a pivotal role in establishing a new frontend-focused team within Cards & Payments Area.",
                                "My contributions have been crucial in the onboarding of both new and existing teams, standardization, and the creation of an optimal development environment.",
                                "My work also involved planning the repatriation of frontend development, technical considerations for new developments, and collaborating with POs, PMs, and department leaders.",
                                "I served as a bridge between technology and product, ensuring reusable code, scalability, and exceeding project expectations.",
                                "My team and I were viewed as knowledge experts and key stakeholders, supporting other areas and teams in crafting the best solutions.",
                                "I've acted as a valuable resource across the organization, driving a strong technical culture, passionate about leading and motivating teams towards shared goals.",
                            ],
                            secondaryText:
                                "- After the new organization rotation of teams, I stopped as Tech PO, since the teams responsibility changed to be more product oriented with focus on the Tech part.",
                        },
                    },
                    {
                        title: "Newly Created Frontend Team - 'Bankular' in Card & Payments Area",
                        fromDate: "Feb 2022",
                        toDate: "Feb 2024",
                        description: {
                            primaryTexts: [
                                "After leading the Frontend Development at the Fredericia location and demonstrating significant impact, I was presented with the opportunity to pioneer a new Frontend Team for the Card & Payments area at Bankdata.",
                                "Recognizing the need for specialized frontend expertise in upcoming major projects, I leveraged my network to assemble a team of 4 skilled developers within 3 months, marking the rapid establishment of a dedicated Frontend Team named \"Bankular\" (Bank, Angular).",
                                "My role extended beyond team assembly; I spearheaded the onboarding process for new and existing teams, imparting knowledge on frontend development standards and best practices.",
                                "My efforts were instrumental in fostering a unified developer environment, ensuring that our three main platforms benefited from alignment and consistency in frontend practices."
                            ],
                            secondaryText:
                                "- This initiative not only filled a critical gap in the Card & Payments area, but also strengthened Bankdata's overall frontend development capabilities."
                        },
                    },
                    {
                        title: "Angular Onboarding",
                        fromDate: "Jan 2023",
                        toDate: "Feb 2024",
                        description: {
                            primaryTexts: [
                                "From Jan-Oct 2023 I went through onboarding of <u>8 teams</u> in Bankdata, on how to start Angular Development. ",
                                "But I wanted to reach even further, so I aligned with my team to create Angular Onboardings as a course of 5 days, for Developers to join. ",
                                "In October 2023, we celebrated a key milestone at Bankdata with the successful completion of our first Angular onboarding for one of our three platforms. ",
                                "<u>The onboarding was structured into three parts:</u>" +
                                "<ul>",
                                "<li>1. Introduction and Overview (covering project creation, frontend mocking, documentation, and hands-on tasks with smart & dumb components) </li>" +
                                "<li>2. Hands-On with Angular (providing an assignment that provided the whole 'Angular' experience) </li>" +
                                "<li>3. Quality Assurance, Assignment Review, and Integration <ul></li>" +
                                "<li>• Reviewing the assignment code </li>" +
                                "<li>• Pair Programming between my developers and the onboardies </li>" +
                                "<li>• In-depth testing with Jest and Spectator </li>" +
                                "</ul></ul>" +
                                "With 14 developers participating on short notice, the engagement level was extraordinary. ",
                                "The OnBoarding did not only strengthen our Angular Community within Bankdata, but also made sure that strong bonds and network has been created. ",
                                "The Teams joined were thrilled for the onboarding and very grateful. Furthermore, developers who were about to create their first Frontend Application estimated that multiple weeks has been saved. "
                            ],
                            secondaryText:
                                "- After a new organization rotation of teams, our team stopped onboarding of new developers in Angular. This responsibility were instead handled from another team.",
                        },
                    },
                    {
                        title: "Angular - Template & CI/CD Automation",
                        fromDate: "Jun 2021",
                        toDate: "Feb 2024",
                        description: {
                            primaryTexts: [
                                "Developed and implemented an automation process for generating Angular applications according to company standards, reducing the initial setup time from 4-5 days to just 3 minutes.",
                                "This innovation has been utilized more than 50 times, significantly streamlining project kickoffs. Additionally, I engineered an automated upgrade process for this template, which has been applied 100+ times, further enhancing developer productivity.",
                                `To further streamline and align development processes, I collaborated with ${urlText('https://www.linkedin.com/in/kasperhelsted/', 'Kasper Helsted')} from the community to create a reusable Jenkins pipeline with custom properties, eliminating the need for teams to copy/paste Jenkins setups from other projects. Inspired by the Platform 2.0 setup, this pipeline bridged the gap between frontend and backend, creating a unified full-stack experience.`,
                                "<u>The Jenkins Pipeline supported:</u>" +
                                "<ul>" +
                                "<li>- Deployments to development, staging, and production </li>" +
                                "<li>- Rollbacks </li>" +
                                "<li>- Change management for production deployments </li>" +
                                "</ul>",
                                "This pipeline was revolutionary for Bankdata's Advisory Channel, where it was rapidly adopted by all 80+ Angular applications. It became a cornerstone of CI/CD, enabling seamless deployments and fostering huge appreciation from the developer community."
                            ],
                            secondaryText:
                                "- Overall, this automation has saved countless hours of development time, accelerated project timelines, and optimized resources across the development teams."
                        },
                    },
                    {
                        title: "Angular - Reusable Components Library",
                        fromDate: "Jun 2021",
                        toDate: "Feb 2024",
                        description: {
                            primaryTexts: [
                                "Initiated and developed a community-driven library of reusable Angular Material components at Bankdata, adopted by over 20 development teams and 65 applications.",
                                "This strategic initiative addressed the inefficiency of 'reinventing the button' by providing UX-approved, standardized components for faster development cycles and cohesive user experiences across the platform.",
                                "The library significantly eased the onboarding process for new developers, streamlined updates through centralized changes, and fostered a culture of collaboration and innovation within the Angular community. ",
                                "Although quantifying the exact time saved is challenging, the alignment of our platforms and the enthusiastic adoption by developers underscore the library's substantial contribution to enhancing productivity and fostering a standardized development approach."
                            ]
                        },
                    },
                    {
                        title: "Bridging the Gap in UX Design and Frontend Development at Bankdata",
                        fromDate: "Dec 2023, Christmas Vacation",
                        toDate: "",
                        description: {
                            primaryTexts: [
                                "At Bankdata, I developed a tool designed to analyze UX mock-ups and identify Kirby Components, enabling developers to create optimized frontend applications with the appropriate components.",
                                "In my free time, I built a GPT-powered Proof of Concept (POC) called KirbyGPT, which significantly streamlines the frontend development process by saving time and ensuring adherence to high-quality standards.",
                                "This innovation has proven valuable for developers, allowing them to transition seamlessly from mock-up designs to production-ready code. KirbyGPT's integration with GitHub and its alignment with official documentation further enhances its impact, not only by improving development workflows but also by supporting education and best practices.",
                                "As Angular Guild Coordinator, this tool played a crucial role in raising coding standards, sharing knowledge, and promoting best practices across teams."
                            ],
                            secondaryText:
                                `Discover KirbyGPT: ${urlText('https://chat.openai.com/g/g-SH6xqAaFR-kirbygpt', 'KirbyGPT')} \n` +
                                `Promo Video Created With AI: ${urlText('https://ai.invideo.io/watch/Xk87VzhSTHH', 'Elevate Frontend Development with KirbyGPT')}`
                        },
                    },
                    {
                        title: "Operational Excellence Days",
                        fromDate: "6. Dec 2023",
                        toDate: "",
                        description: {
                            primaryTexts: [
                                `In December 2023, it was my turn to take the stage with my buddy ${urlText('https://www.linkedin.com/in/niels-wrang-larsen/', 'Niels Wrang')}, at Bankdata's Operational Excellence Days. I led a presentation on Frontend Onboarding – and how it's all about getting new developers up and running faster.`,
                                "It was important that we're just talking about theory, taking them through the whole frontend experience.",
                                "We showcased how our onboarding in Angular builds upon our backend foundation and how we offer developers an end-to-end experience from the frontend css all the way down to the database.",
                                "We delved into the significance of knowledge sharing, the use of reusable code, and the role of our Angular Community in fostering a collaborative and efficient development environment.",
                                "We want to enhance developer experience and ensuring a smooth transition for new team members into our dynamic and fast-paced environment.",
                                "This event was not just about sharing our methods; it was about reinforcing our commitment to operational excellence and continuous improvement, as an organisation."
                            ]
                        },
                    },
                    {
                        title: "Frontend Developer",
                        fromDate: "Jan 2022",
                        toDate: "Jan 2023",
                        description: {
                            primaryTexts: [
                                "Building upon my experience and leadership in Frontend Development at the Fredericia location, I transitioned to a role focused exclusively on frontend development.",
                                "This shift was a strategic move to leverage my strengths and passion for creating intuitive, responsive user interfaces, further embracing my expertise in Angular and other modern web technologies.",
                                "In this period, I not only contributed significantly to our projects' success through innovative solutions and enhancements, but also played a role in mentoring junior developers and advocating for best practices in frontend architecture.",
                                "My dedication to excellence in frontend development enabled more efficient project execution, elevated user experience across our applications, and reinforced the importance of specialized roles within our development teams",
                            ],
                            secondaryText:
                                "- Promoted to Senior Frontend Developer in Jan, 2023."
                        },
                    },
                    {
                        title: "Team DigiX - Full Stack Developer",
                        fromDate: "Apr 2021",
                        toDate: "Jan 2022",
                        description: {
                            primaryTexts: [
                                "As part of Team DigiX at Bankdata, I worked on several key services essential for customer communication and account management.",
                                "<u>My contributions included developing and enhancing the following services: </u>",
                                "   - <u>MessageService</u>: Managing the creation and delivery of customer communications, such as SMS, emails, and push notifications.",
                                "   - <u>Notification Registrations</u>: Overseeing customer preferences for notifications, including mail, SMS, and push notifications.",
                                "   - <u>Digital Access</u>: Handling customer information related to digital access agreements, including MitID and Netbank.",
                                "   - <u>Daily Maximum (Dagsmaks)</u>: Developing and maintaining services to create and manage daily transaction limits for individual accounts.",
                                "While my primary focus was on frontend development, I also played an active role in full-stack and host development.",
                                "This period was defined by impactful contributions, including completing three major rewrites of frontend applications, significantly boosting their performance, scalability, and reliability.",
                                "My ability to adapt quickly and provide technical solutions made me a crucial part of the team, ensuring the success of our high-priority initiatives.",],
                            secondaryText:
                                "- In November 2021, I was presented with the exciting opportunity to establish a dedicated frontend team, which accelerated frontend development across the organization.",
                        },
                    },
                ],
            },
            {
                companyName: "EG A/S",
                startDate: egStartDate,
                endDate: egEndDate,
                totalLength: calculateTotalLength(egStartDate, egEndDate),
                companyLink: "https://eg.dk/offentlig-digitalisering/eg-sensum-one/",
                companyIcon: egLogo,
                details: [
                    {
                        title: "Full Stack Developer",
                        fromDate: "Aug 2020",
                        toDate: "May 2021",
                        description: {
                            primaryTexts: [
                                "My promotion from Junior Developer to Full Stack Developer was a recognition of not only my technical knowledge but also my commitment to taking substantial responsibility within the team.",
                                "My shown a level of ownership over projects by delivering high-quality code and solutions.",
                                "My ability to work independently, coupled with a proactive approach to problem-solving, allowed me to contribute significantly to our teams success.",
                                "This period was marked by my mature attitude towards software development, focusing on writing clean, efficient, and maintainable code, which laid the foundation for future leadership roles and furthered my development as a key asset to the team."
                            ]
                        },
                    },
                    {
                        title: "Scrum Master",
                        fromDate: "Jun 2020",
                        toDate: "May 2021",
                        description: {
                            primaryTexts: [
                                "After EG A/S was acquired by Francisco Partners, the company decided to invest in becoming more Agile. As part of this transformation, the Teamlead role was decommissioned, and Scrum Masters were introduced.",
                                "I spearheaded the agile transformation and began educating myself to help teams improve. My focus was on ensuring effective Scrum Events, tracking progress and metrics, removing impediments, and fostering collaboration between developers and teams. Despite the company’s initial lack of maturity in Agile Development, I drove continuous improvement in our Scrum processes, addressing the challenges we faced along the way.",
                                "When the Covid-19 pandemic hit the Danish labor market, I played a key role in rethinking how we cooperated as a team, conducted meetings, and facilitated collaboration in a fully remote setting. This required reimagining traditional workflows to maintain productivity and team cohesion, even under unprecedented circumstances.",
                                "In addition to my Scrum Master responsibilities, I continued to work primarily as a developer, ensuring high-quality software delivery while balancing the demands of leadership and facilitation.",
                            ],
                            secondaryText:
                                "- During this time, I also honed my skills in creating effective documentation—a critical yet often underestimated aspect of Agile Development. I learned that good documentation is truly an art, and I leveraged this skill to ensure clarity, alignment, and continuity across teams."
                        },
                    },
                    {
                        title: "EG's Polish Team",
                        fromDate: "Feb 2020",
                        toDate: "",
                        description: {
                            primaryTexts: [
                                "In August 2020, I led the establishment of a new team in Poland for EG - Digital Welfare, starting with two developers and strategically positioning it for future scaling.",
                                "My responsibilities extended beyond traditional leadership; I worked to harmonize workflows between the Danish and the Polish teams, ensuring seamless communication and collaboration. I refined our Scrum processes to better accommodate cross-border teams, fostering an agile and productive working environment that bridged cultural and technical gaps.",
                                "A significant part of my role involved creating a positive and efficient development culture by mentoring the Polish team and aligning them with the standards and practices of the Danish teams. This included streamlining technical processes, ensuring high-quality code, and fostering a unified approach to problem-solving.",
                                "Additionally, I facilitated knowledge sharing between the teams, emphasizing alignment, reusable solutions, and scalability in our development efforts. My leadership helped lay the foundation for a high-performing, collaborative team that continues to deliver exceptional results.",
                                "This experience not only marked a significant organizational achievement but also contributed greatly to my personal growth as a leader, communicator, and advocate for cross-functional collaboration.",
                            ]
                        },
                    },
                    {
                        title: "Software Teamlead",
                        fromDate: "Sep 2019",
                        toDate: "Jun 2020",
                        description: {
                            primaryTexts: [
                                "After just 7 months at EG, I was entrusted with the role of Teamlead for a team of 8 developers and a QA, a testament to my leadership potential and ability to manage responsibilities effectively. \n\n" +
                                "This role required me to step into a leadership position during a critical time, following the departure of our former Teamlead. Management recognized my ability to inspire, guide, and manage the team, despite my short tenure. \n\n" +
                                "As Teamlead, I wasn’t just a coordinator; I focused on improving workflows, fostering collaboration across diverse individuals, and bridging communication between tech and stakeholders. My efforts ensured that our team delivered projects to the deadline, with the best possible quailty while maintaining a positive and productive work environment. \n\n" +
                                "In this role, I honed my ability to align diverse skill sets toward common goals, while also balancing technical and strategic oversight, which proved invaluable for the team's success. This period was pivotal in shaping my leadership style and understanding of team dynamics. \n\n" +
                                "It was an incredible opportunity to learn how to lead a diverse team and unite them under a shared vision and objectives."
                            ],
                            secondaryText:
                                `Articles: ${urlText('https://www.linkedin.com/posts/mathias-skovgaard_jeg-ville-lige-dele-denne-fine-artikel-omkring-activity-6683082058618679296-yufu?utm_source=share&utm_medium=member_desktop', 'LinkedIn')}` +
                                " / " +
                                `${urlText('https://drive.google.com/file/d/1cmCszumK59QiiJsWvtSXJuu3JyBQTSpz/view?usp=sharing', 'Erhvervsakademiet SydVest - Page 6')}`
                        },
                    },
                    {
                        title: "Full Stack - Junior Developer",
                        fromDate: "Feb 2019",
                        toDate: "Aug 2020",
                        description: {
                            primaryTexts: [
                                "<u>EG - Digital Welfare</u> was my first professional role as a Software Developer, marking the start of my journey in the tech industry.",
                                "During this time, I contributed to two significant projects",
                                "<u>FMK (Fælles Medicinkort)</u>: A system that helps residential care facilities manage and administer medicine efficiently, ensuring compliance and patient safety.",
                                "<u>Sensum One</u>: A comprehensive platform designed to streamline social welfare efforts. The system emphasized automation, collaboration, and oversight across the special needs sector, providing a unified approach to case management and significantly improving life through measurable interventions",
                                "This role allowed me to combine my technical skills with my background as a Social & Health Worker, enabling me to build user-centered solutions that truly made a difference in people's lives.",
                                "It was during this time that I honed my skills in software development, focusing on clean, maintainable code while gaining practical experience in creating solutions that bridged the gap between user needs and technical capabilities. My contributions were impactful in ensuring high-quality deliverables and fostering collaboration across teams.",
                            ],
                            secondaryText:
                                "- Promoted to Full Stack Developer in Aug 2020, reflecting my growth and contributions to the team."
                        },
                    },
                ],
            }, {
                companyName: "Blue Water Shipping",
                startDate: bwsStartDate,
                endDate: bwsEndDate,
                totalLength: calculateTotalLength(bwsStartDate, bwsEndDate),
                companyLink: "https://www.bws.net/da/om-blue-water",
                companyIcon: bwsLogo,
                details: [
                    {
                        title: "Frontend, Main Assignment",
                        fromDate: "Nov 2018",
                        toDate: "Jan 2019",
                        description: {
                            primaryTexts: [
                                "Our final year project for Blue Water Shipping focused on upgrading their existing front-end frameworks developed in AngularJS to Angular-7 with Typescript.",
                                "With my fellow students " +
                                `${urlText('https://www.linkedin.com/in/adamino/', 'Adam Hansen')}, ` +
                                `${urlText('https://www.linkedin.com/in/mathias-sejrup-plougmann-6750baa8/', 'Mathias Sejrup Plougmann')} & ` +
                                `${urlText('https://www.linkedin.com/in/rasmus-lindved-4167a112a/', 'Rasmus Lindved')} ` +
                                "we aimed to deliver a strategic upgrade plan for their front-ends, showcasing the transition to a more type-strong language by upgrading their \"Work Order Management\" WebApp and the importance of fully tested frontend applications.",
                                "This included not just an upgraded version of the frontend, but also comprehensive documentation of the upgrade process and a new frontend architecture to facilitate the transition for Blue Water Shipping's developers to the modern Angular framework."
                            ]
                        },
                    },
                    {
                        title: "Full Stack - Intern",
                        fromDate: "Aug 2018",
                        toDate: "Oct 2018",
                        description: {
                            primaryTexts: [
                                "During my internship at Blue Water Shipping, I was actively engaged in enhancing operational efficiency and software functionality.",
                                "I contributed to various projects, including developing <u>K</u>ey <u>P</u>erformance <u>I</u>ndicator (KPI) reports and improving email communication systems for shipping details.",
                                "My tasks involved SQL database management, implementing new stored procedures, and refining data representation in Excel reports for better decision-making.",
                                "This period was instrumental in honing my technical skills, particularly in SQL, and understanding the intricacies of logistics and supply chain management software solutions."
                            ]
                        },
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
    }
;

export default Timeline;
