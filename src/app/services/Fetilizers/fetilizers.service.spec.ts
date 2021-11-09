import { TestBed } from '@angular/core/testing';

import { FetilizersService } from './fetilizers.service';

describe('FetilizersService', () => {
  let service: FetilizersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetilizersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
