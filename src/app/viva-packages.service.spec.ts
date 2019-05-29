import { TestBed } from '@angular/core/testing';

import { VivaPackagesService } from './viva-packages.service';

describe('VivaPackagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VivaPackagesService = TestBed.get(VivaPackagesService);
    expect(service).toBeTruthy();
  });
});
