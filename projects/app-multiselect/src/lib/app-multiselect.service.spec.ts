import { TestBed } from '@angular/core/testing';

import { AppMultiselectService } from './app-multiselect.service';

describe('AppMultiselectService', () => {
  let service: AppMultiselectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppMultiselectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
