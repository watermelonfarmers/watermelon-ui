import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RequirementService } from './requirement.service';

describe('RequirementService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: RequirementService = TestBed.get(RequirementService);
    expect(service).toBeTruthy();
  });
});
