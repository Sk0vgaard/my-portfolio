import React from 'react';
import JobTitleTimeline from "./jobTitleTimeline";
import { OfficeBuildingIcon } from '@heroicons/react/outline';

const JobTimeline = ({jobTimelines}) => {
    return (
        <ol className="border-l-2 border-primary dark:border-primary-500">
            {jobTimelines.map((timeline) => (
                <li key={timeline.company + timeline.jobTitle}>
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
                        <div className="block rounded-lg bg-neutral-50 p-4 md:p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                            <div className="flex items-center md:justify-between">
                                <span className="text-sm text-info" rel="noreferrer">
                                    <p className="hidden md:block text-3xl">
                                        {timeline.company}
                                    </p>
                                </span>
                                <div className="relative aspect-w-1 aspect-h-1 h-[100px] overflow-hidden bg-neutral-700">
                                    <img className="relative top-0 left-0 w-full h-full object-cover text-white" src={timeline.companyIcon} alt={timeline.company} />
                                </div>
                            </div>
                            <JobTitleTimeline jobs={timeline.jobs} />
                            <div className={'py-2 pl-4'}>
                                <button
                                    type="button"

                                    className="inline-block rounded border-2 border-info px-4 pt-[4px] pb-[3px] text-s font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                                    <a href={timeline.companyLink} target="_blank" rel="noreferrer">
                                        Read about {timeline.company}
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default JobTimeline;
