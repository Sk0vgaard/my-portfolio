import React from 'react';
import JobTitleTimeline from "./jobTitleTimeline";
import { OfficeBuildingIcon } from '@heroicons/react/outline';

const JobTimeline = ({timelines}) => {
    return (
        <ol className="border-l-2 border-primary dark:border-primary-500">
            {timelines.map((timeline) => (
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
                                <OfficeBuildingIcon ></OfficeBuildingIcon>
                                {/*<path*/}
                                {/*    fillRule="evenodd"*/}
                                {/*    d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"*/}
                                {/*    clipRule="evenodd"*/}
                                {/*/>*/}
                            </svg>
                        </div>
                        <div
                            className="mb-2 block rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10">
                            <a href={timeline.workplaceLink} target="_blank"
                               className="text-sm text-info transition duration-150 ease-in-out hover:text-info-600 focus:text-info-600 active:text-info-700" rel="noreferrer">
                                <p className={'text-3xl'}>
                                    {timeline.workplace}
                                </p>
                            </a>
                            <JobTitleTimeline timelines={timeline.timeline} />
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default JobTimeline;
