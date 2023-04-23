export interface CompanyTimeline {
    companyName: string;
    startDate: string;
    endDate: string;
    companyLink: string;
    companyIcon: string;
    details: JobDetails[];
}

export interface JobDetails {
    title: string;
    fromDate: string;
    toDate: string;
    description: string;
}

export {};
