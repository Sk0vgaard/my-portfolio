export interface CompanyTimeline {
    companyName: string;
    startDate: Date;
    endDate: Date;
    totalLength: string;
    companyLink?: string;
    companyIcon?: string;
    details: JobDetails[];
}

export interface JobDetails {
    title: string;
    fromDate: string;
    toDate: string;
    description: {
        primaryTexts: string[]; // primary text about the title
        secondaryText?: string; // italic text
    };
}

export {};
