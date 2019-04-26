import { TestBed } from '@angular/core/testing';

import { ModalServicesService } from './modal-services.service';

describe('ModalServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalServicesService = TestBed.get(ModalServicesService);
    expect(service).toBeTruthy();
  });
});
