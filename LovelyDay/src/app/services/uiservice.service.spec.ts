import { TestBed } from '@angular/core/testing';

import { UIserviceService } from './uiservice.service';

describe('UIserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UIserviceService = TestBed.get(UIserviceService);
    expect(service).toBeTruthy();
  });
});
