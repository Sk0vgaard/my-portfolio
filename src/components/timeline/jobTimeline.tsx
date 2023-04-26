import React, {useState} from 'react';
import JobTitleTimeline from './jobTitleTimeline';
import {FaBuilding} from 'react-icons/fa';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import {CompanyTimeline} from '../../interfaces';

type ExpandedState = {
    [key: string]: boolean;
};

const JobTimeline = ({companyTimelines}: { companyTimelines: CompanyTimeline[] }) => {
    const [expanded, setExpanded] = useState<ExpandedState>({});

    const toggleExpand = (key: any) => {
        setExpanded((prevState: Record<string, boolean>) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <ol className="border-l-2 border-primary border-primary-500">
            {companyTimelines.map((companyTimeline: CompanyTimeline) => {
                const itemKey = companyTimeline.companyName;

                return (
                    <li key={itemKey}>
                        <div className="flex-start items-center">
                            <div
                                className="-ml-[36px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-info-100 text-info-700">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 -2 16 20"
                                    fill="currentColor"
                                    className="h-7 w-7"
                                >
                                    <FaBuilding></FaBuilding>
                                </svg>
                            </div>
                            <div onClick={() => toggleExpand(itemKey)}
                                 className="block rounded-lg bg-neutral-50 p-4 md:p-6 shadow-md bg-neutral-700 cursor-pointer hover:bg-neutral-800">
                                <div className="flex items-center justify-center md:justify-between">
                                    <span className="text-sm text-info" rel="noreferrer">
                                        <p className="hidden md:block text-3xl">
                                            {companyTimeline.companyName}
                                        </p>
                                        <p className="hidden md:block text-sm">
                                            {companyTimeline.startDate} - {companyTimeline.endDate}
                                        </p>
                                    </span>
                                    <div
                                        className="relative aspect-w-1 aspect-h-1 h-[100px] overflow-hidden">
                                        <img className="relative top-0 left-0 w-full h-full object-cover text-white"
                                             src={companyTimeline.companyIcon} alt={companyTimeline.companyName}/>
                                    </div>
                                </div>
                                {expanded[itemKey] && (
                                    <JobTitleTimeline jobDetails={companyTimeline.details}/>
                                )}
                                <div className={'py-2 md:pl-4 flex items-center justify-center md:justify-between'}>
                                    <button
                                        type="button"
                                        className="inline-block rounded border-2 border-info px-4 pt-[4px] pb-[3px] text-s font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 hover:bg-neutral-100 hover:bg-opacity-10"
                                    >
                                        <a href={companyTimeline.companyLink} target="_blank" rel="noreferrer">
                                            Read about {companyTimeline.companyName}
                                        </a>
                                    </button>
                                </div>
                                <div className="flex items-center justify-center">
                                    {expanded[itemKey] ? (
                                        <FiChevronUp className="text-info"/>
                                    ) : (
                                        <FiChevronDown className="text-info"/>
                                    )}
                                </div>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ol>
    );
};

export default JobTimeline;
