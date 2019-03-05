export class requirement {
    id: Number;
    title: string;
    description: string;
    created_time : string;
    last_modified_time: string;
    priority : string;
    status : string;
    created_by_user : string;
    due_date : string;
    comments : [];
    assigned_to : string;
    archived : boolean;
    url : string;

    constructor(id: Number, title: string, description: string, created_time: string, 
        last_modified_time: string, priority : string, status: string, 
        created_by_user: string, due_date:string, assigned_to: string,
        archived : boolean, url : string) {
        
        this.id = id;
        this.title = title;
        this.description = description;
        this.created_time = created_time;
        this.last_modified_time = last_modified_time;
        this.priority = priority;
        this.status = status;
        this.created_by_user = created_by_user;
        this.due_date = due_date;
        this.assigned_to = assigned_to;
        this.archived = true;
        this.url = 'https://www.pivotaltracker.com/story/show/164053311';

    }

    public static getDefault():requirement{ 
        return new requirement(null, "","", "", "", "", "", "", "", "Unassigned", true , 'https://www.pivotaltracker.com/story/show/164053311');
    }
}