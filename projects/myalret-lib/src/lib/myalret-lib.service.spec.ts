import { TestBed } from '@angular/core/testing';

import { MyalretLibService } from './myalret-lib.service';

describe('MyalretLibService', () => {
  let service: MyalretLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyalretLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
