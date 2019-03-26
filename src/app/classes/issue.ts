import { User } from './user';

export interface Issue {
    issueId: number;
    created: string;
    lastModified: string;
    title: string;
    description: string;
    priority: number;
    status: string;
    createdByUser: User;
    assignedUser: User;

}