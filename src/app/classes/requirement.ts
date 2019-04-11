export class Requirement {
    id: Number;
    title: string;
    description: string;
    createdTime : string;
    lastModifiedTime: string;
    priority : string;
    status : string;
    createdByUser : any;
    dueDate : string;
    comments : [];
    assignedToUser : any;
    archived : boolean;
    relatedIssue : {issueId : Number, title: String} [];
    //url : string;

    constructor() {
        
        this.id = null;
        this.title = '';
        this.description = '';
        this.createdTime = '';
        this.lastModifiedTime = '';
        this.priority = '';
        this.status = 'NEW';
        this.createdByUser = '';
        this.dueDate = '';
        this.assignedToUser = '';
        this.archived = true;
        this.relatedIssue = [];
        //this.url = 'https://www.pivotaltracker.com/story/show/164053311';

    }
/* 
    public static getDefault():Requirement{ 
        return new Requirement(null, "","", "", "", "", "", "", "", "Unassigned", true , 'https://www.pivotaltracker.com/story/show/164053311');
    } */
}