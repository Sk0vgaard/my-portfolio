import React, { useState } from 'react';
import JobTitleTimeline from './jobTitleTimeline';
import { FaBuilding } from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { CompanyTimeline } from '../../interfaces';
import { scroller } from 'react-scroll';

type ExpandedState = {
    [key: string]: boolean;
};

const JobTimeline = ({companyTimelines}: { companyTimelines: CompanyTimeline[] }) => {
    const [expanded, setExpanded] = useState<ExpandedState>({});

    const toggleExpand = (key: any) => {
        setExpanded((prevState: Record<string, boolean>) => {
            const isExpanding = !prevState[key];
            if (!isExpanding) {
                // Schedule the scrolling to happen after state update
                setTimeout(() => {
                    scroller.scrollTo('timeline', {
                        duration: 500,
                        delay: 0,
                        smooth: 'easeOutQuint', // Starts the fastest among the animations and decelerates the most sharply towards the end.
                        offset: -50, // Adjust based on your requirement
                    });
                }, 0);
            }
            return {
                ...prevState,
                [key]: isExpanding,
            };
        });
    };

    return (
        <ol className="border-l-2 border-primary border-primary-500">
            {companyTimelines.map((companyTimeline: CompanyTimeline) => {
                const itemKey: string = companyTimeline.companyName;

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
                                 className="block rounded-lg p-4 md:p-6 shadow-md bg-gray-800 cursor-pointer hover:bg-gray-900">
                                <div className="flex items-center justify-center md:justify-between">
                                    <span className="text-sm text-info" rel="noreferrer">
                                        <p className="hidden md:block text-3xl">
                                            {companyTimeline.companyName}
                                        </p>
                                        <p className="hidden md:block text-sm text-info">
                                            {companyTimeline.startDate.toLocaleDateString('en-GB', {
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                            {' - '}
                                            {companyTimeline.endDate.toDateString() === new Date().toDateString() ? "Present" : companyTimeline.endDate.toLocaleDateString('en-GB', {
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                            {' '}
                                            ({companyTimeline.totalLength})
                                        </p>
                                    </span>
                                    <div
                                        className="relative aspect-w-1 aspect-h-1 h-[100px] overflow-hidden">
                                        {companyTimeline.companyIcon && (
                                            <img className="relative top-0 left-0 w-full h-full object-cover text-white"
                                                 src={companyTimeline.companyIcon} alt={companyTimeline.companyName}/>
                                        )}
                                    </div>
                                </div>
                                <p className="md:hidden text-sm text-info flex items-center justify-center md:justify-between">
                                    {companyTimeline.startDate.toLocaleDateString('en-GB', {
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                    {' - '}
                                    {companyTimeline.endDate.toDateString() === new Date().toDateString() ? "Present" : companyTimeline.endDate.toLocaleDateString('en-GB', {
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                    {' '}
                                    ({companyTimeline.totalLength})
                                </p>
                                {expanded[itemKey] && (
                                    <JobTitleTimeline jobDetails={companyTimeline.details}/>
                                )}
                                {companyTimeline.companyLink && (
                                    <div className={'py-2 md:pl-4 flex items-center justify-center md:justify-between'}>
                                        <button
                                            type="button"
                                            className="inline-block rounded border-2 border-info px-4 pt-[4px] pb-[3px] text-s font-medium uppercase leading-normal text-info transition duration-150 ease-in-out hover:border-info-600 hover:bg-gray-500 hover:bg-opacity-10 hover:text-info-600 focus:border-info-600 focus:text-info-600 focus:outline-none focus:ring-0 active:border-info-700 active:text-info-700 hover:bg-gray-100 hover:bg-opacity-10"
                                        >
                                            <a href={companyTimeline.companyLink} target="_blank" rel="noreferrer">
                                                Read about {companyTimeline.companyName}
                                            </a>
                                        </button>
                                    </div>
                                )}
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
