export class requirement {
    name: string;
    description: string;
    status: string;
    createdBy: string;
    assignedTo: string;

    constructor(name: string, description: string, status: string, createdBy: string, assignedTo: string) {
        this.name = name;
        this.description = description;
        this.status = status;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
    }
}