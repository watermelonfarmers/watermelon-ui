import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { RequirementFormComponent } from './requirement-form.component';
import { RequirementService } from 'src/app/services/requirement.service';
import { MockRequirementService } from 'src/app/testing/mockRequirementService';

describe('RequirementFormComponent', () => {
  let component: RequirementFormComponent;
  let fixture: ComponentFixture<RequirementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [ RequirementFormComponent ],
      providers: [{
        provide: RequirementService,
        useClass: MockRequirementService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequirementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
