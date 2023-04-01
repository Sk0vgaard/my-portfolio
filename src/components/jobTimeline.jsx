import React from 'react';
import JobTitleTimeline from "./jobTitleTimeline";
import { OfficeBuildingIcon } from '@heroicons/react/outline';

const JobTimeline = ({jobTimelines}) => {
    return (
        <ol className="border-l-2 border-primary dark:border-primary-500">
            {jobTimelines.map((timeline) => (
                <li key={timeline.workplace + timeline.jobTitle}>
                    <div className="flex-start items-center">
                        <div
                            className="-ml-[36px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-info-100 text-info-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-6 w-6"
                            >
                                <OfficeBuildingIcon></OfficeBuildingIcon>
                            </svg>
                        </div>
                        <div className="mb-2 block rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                            <img src="" alt={timeline.workplaceIcon}/>
                            <a href={timeline.workplaceLink} target="_blank"
                               className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700" rel="noreferrer">
                                <p className={'text-3xl'}>
                                    {timeline.workplace}
                                </p>
                            </a>
                            <JobTitleTimeline jobs={timeline.jobs} />
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default JobTimeline;
