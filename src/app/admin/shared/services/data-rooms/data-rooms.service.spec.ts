import { TestBed, inject } from '@angular/core/testing';

import { DataRoomsService } from './data-rooms.service';

describe('DataRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataRoomsService]
    });
  });

  it('should be created', inject([DataRoomsService], (service: DataRoomsService) => {
    expect(service).toBeTruthy();
  }));
});
