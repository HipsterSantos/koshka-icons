import { TestBed } from '@angular/core/testing';

import { KoshkaIconsService } from './koshka-icons.service';

describe('KoshkaIconsService', () => {
  let service: KoshkaIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoshkaIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
