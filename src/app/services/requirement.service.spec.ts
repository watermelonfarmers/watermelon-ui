import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RequirementService } from './requirement.service';
import { Requirement } from '../classes/requirement';

const testUrl = '/requirements';


describe('RequirementService', () => {
  let httpTestingController: HttpTestingController;
  let requirementService : RequirementService;

  const testRequirement : Requirement [] = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        RequirementService
      ]
    });

    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
    requirementService = TestBed.get(RequirementService);
  });
  /// Tests begin ///

  afterEach(()=> {
    httpTestingController.verify();
  })

  it('should be created', () => {
    const service: RequirementService = TestBed.get(RequirementService);
    expect(service).toBeTruthy();
  });

  it('can retrieve all requirements from the API via GET', () => {
    
    requirementService.readRequirements().subscribe(
      requirements => {
        expect(requirements.length).toBe(2);
        expect(requirements).toEqual(testRequirement);
      }
    );

    const req = httpTestingController.expectOne(requirementService.requirementsUrl);
    expect(req.request.method).toBe('GET');

    req.flush(testRequirement);

  })

  it('can retrieve one requirement from the API via GET', ()=> {
    let id = 2;
    requirementService.readOneRequirement(id).subscribe(
      requirement => {
        expect(requirement).toEqual(testRequirement[1]);
      }
    );

    const req = httpTestingController.expectOne(requirementService.requirementsUrl + '/' + id);
    expect(req.request.method).toEqual('GET');

    req.flush(testRequirement[1]);
  });

  it('can create a requirement via POST', ()=> {
    let newRequirement: Requirement = {
      id: 3,
      title: 'Test Title3',
      description: 'Test Description3',
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
    }

    requirementService.createRequirement(newRequirement).subscribe(
      requirement => expect(requirement).toEqual(newRequirement)
      
    );

    const req = httpTestingController.expectOne(requirementService.requirementsUrl);
    expect(req.request.method).toEqual('POST');

    req.flush(newRequirement);
  });

  it('can update a requirement via PUT', ()=> {
    let updateRequirement: Requirement = {
      id: 4,
      title: 'Test Title4',
      description: 'Test Description4',
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
    }

    requirementService.updateRequirement(updateRequirement).subscribe(
      requirement => expect(requirement).toEqual(updateRequirement)
      
    );

    const req = httpTestingController.expectOne(requirementService.requirementsUrl);
    expect(req.request.method).toEqual('PUT');

    req.flush(updateRequirement);
  });

  it('can delete a requirement via DELETE', ()=> {
    let id = 2; 
    requirementService.deleteRequirement(id).subscribe(
      requirement => expect(requirement).toEqual(testRequirement[1], 'should return status code 200')
      
    );

    const req = httpTestingController.expectOne(requirementService.requirementsUrl+ '/' + id);
    expect(req.request.method).toEqual('DELETE');

    req.flush(testRequirement[1]);
  });

});

