import React from 'react';

const JobTimeline = ({jobs}) => {
    return (
        <ol className="border-l-2 border-primary dark:border-primary-500">
            {jobs.map((job) => (
                <li key={job.jobTitle}>
                    <div className="flex-start flex">
                        <div className="-ml-[27px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                        <div className={'pl-2 w-full'}>
                            <div className="mb-4 flex justify-between">

                                <span>{job.title}</span>
                                <span className="text-sm text-info transition duration-150 text-info-500">
                                    {job.fromDate} - {job.toDate}
                                </span>
                            </div>
                            <p className="mb-6 text-neutral-700 dark:text-neutral-200">
                                {job.description}
                            </p>
                        </div>
                    </div>
                </li>
                ))}
        </ol>
);
};

export default JobTimeline;
