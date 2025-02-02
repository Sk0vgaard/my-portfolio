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
                            {jobDetail.description.primaryTexts && (
                                <div>
                                    {jobDetail.description.primaryTexts.map((text, index) => (
                                        <p key={index} className="pt-2 text-neutral-200 whitespace-pre-wrap hover:cursor-text"
                                            dangerouslySetInnerHTML={{__html: text}}
                                            onClick={(e) => e.stopPropagation()}>
                                        </p>
                                    ))}
                                    {jobDetail.description.secondaryText &&
                                        <div className="mt-6 text-neutral-200 whitespace-pre-wrap hover:cursor-text italic"
                                            dangerouslySetInnerHTML={{__html: jobDetail.description.secondaryText}}
                                            onClick={(e) => e.stopPropagation()}>
                                        </div>
                                    }
                                </div>
                                )}
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    );
};

export default JobTimeline;
