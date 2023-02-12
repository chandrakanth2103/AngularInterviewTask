import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { HomeServiceService } from './home-service.service';

describe('HomeServiceService', () => {
  let service: HomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[HomeServiceService]
    });
    service = TestBed.inject(HomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
