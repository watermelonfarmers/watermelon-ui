import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { RequirementService } from './requirement.service';

describe('RequirementService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: RequirementService = TestBed.get(RequirementService);
    expect(service).toBeTruthy();
  });
});
