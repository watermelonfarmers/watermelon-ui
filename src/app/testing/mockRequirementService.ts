import { of, Observable } from 'rxjs';

interface Requirement {
  id: Number;
  title: string;
  description: string;
  created_time : string;
  last_modified_time: string;
  priority : string;
  status : string;
  created_by_user : string;
  due_date : string;
  comments : any [];
  assigned_to : string;
  archived : boolean;
  url : string;
}

export class MockRequirementService {

  requirements = [
    {
      id: 1,
      title: 'Test Title',
      description: 'Test Description',
      created_time : "2019-03-05T03:20:24.015",
      last_modified_time: "2019-03-05T03:20:24.015",
      priority : '10',
      status : 'NEW',
      created_by_user : 'User 1',
      due_date : "2019-03-05T03:20:24.015",
      comments : [],
      assigned_to : 'User 2',
      archived : true,
      url : 'test/url'
    },
    {
      id: 2,
      title: 'Test Title2',
      description: 'Test Description2',
      created_time : "2019-03-05T03:20:24.015",
      last_modified_time: "2019-03-05T03:20:24.015",
      priority : '5',
      status : 'NEW',
      created_by_user : 'User 1',
      due_date : "2019-03-05T03:20:24.015",
      comments : [],
      assigned_to : 'User 2',
      archived : true,
      url : 'test/url'
    },
  ];
  
    requirementsUrl= 'https://watermelon-service.herokuapp.com/api/requirements';
  
    readRequirements() : Observable<Requirement []> {
      
      return of(this.requirements);
    }
  
    readOneRequirement(id : Number) : Observable <Requirement > {
      return of(this.requirements[0]);

    }
  
    createRequirement() {
      return 'createRequirement';
    }
  
    updateRequirement() {
      return 'updateRequirement';
    }
  
    deleteRequirement(id : Number) {
      return 'deleteRequirement';
    }

    getUsers() {
      return 'getUsers';
    }
  };
