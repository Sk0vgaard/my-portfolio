import React from 'react';
import {JobDetails} from '../../interfaces';

const JobTimeline = ({jobDetails}: { jobDetails: JobDetails[] }) => {
    return (
        <ol className="border-l-2 border-primary text-info">
            {jobDetails.map((jobDetail, index) => (
                <li key={index}>
                    <div className="flex-start flex">
                        <div
                            className="-ml-[27px] flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary bg-info"></div>
                        <div className={'pl-2 w-full'}>
                            <div className="mb-4 flex justify-between">
                                <span>{jobDetail.title}</span>
                                <span className="text-sm text-info transition duration-150 text-info-500">
                                    {jobDetail.fromDate} {jobDetail.toDate ? `- ${jobDetail.toDate}` : ''}
                                </span>
                            </div>
                            <p className="mb-6 text-neutral-200 whitespace-pre-wrap"
                               dangerouslySetInnerHTML={{ __html: jobDetail.description }}
                               onClick={(e) => e.stopPropagation()}>
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default JobTimeline;
