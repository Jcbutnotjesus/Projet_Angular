import { TestBed } from '@angular/core/testing';

import { CarroufService } from './carrouf.service';

describe('CarroufService', () => {
  let service: CarroufService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroufService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
