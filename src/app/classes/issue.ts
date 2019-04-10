import { User } from './user';

export interface Issue {
    issueId: number;
    created: string;
    lastModified: string;
    title: string;
    description: string;
    estimate: number;
    priority: number;
    status: string;
    createdByUser: User;
    assignedUser: User;
    relatedRequirements: Array<RelatedRequirement>;
}

interface RelatedRequirement {
    requirementId: number;
    title: string;
}