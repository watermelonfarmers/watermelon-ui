import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RequirementsComponent } from './requirements.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MockRequirementService } from '../../../testing/mockRequirementService';
import { RequirementService } from '../../../services/requirement.service';
import { Requirement } from '../../../classes/requirement';

describe('RequirementsComponent', () => {
  let component: RequirementsComponent;
  let fixture: ComponentFixture<RequirementsComponent>;

  let dummyRequirements  : Requirement [] = [
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

let dummyUsers = [
  {
    userName: 'user1',
    firstName: 'first',
    lastName: 'last'
  },
  {
    userName: 'user2',
    firstName: 'first',
    lastName: 'last'
  }
];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ RequirementsComponent ],
      providers: [RequirementsComponent, {
        provide: RequirementService,
        useClass : MockRequirementService
       }],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementsComponent);
    component = fixture.componentInstance;

    component.getRequirements = () => {
      return dummyRequirements;
    }

    component.getUsers = () => {
      return dummyUsers;
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should spy on getRequirements', () => {
    let spy = spyOn(component, 'getRequirements');
    component.getRequirements();
    expect(spy).toHaveBeenCalled();
  });

  it('should spy on getRequirements and return dummy data', () => {
    var spy = spyOn(component, 'getRequirements').and.returnValue(dummyRequirements);
    expect(component.getRequirements()).toEqual(dummyRequirements);
  });

  it('should spy on getUsers', () => {
    let spy = spyOn(component, 'getUsers');
    component.getUsers();
    expect(spy).toHaveBeenCalled();
  });

  it('should spy on getUsers and return dummy users', () => {
    var spy = spyOn(component, 'getUsers').and.returnValue(dummyUsers);
    expect(component.getUsers()).toEqual(dummyUsers);
  });
});
