import { TestBed, inject } from '@angular/core/testing';

import { EventsEmitService } from './events-emit.service';

describe('EventsEmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsEmitService]
    });
  });

  it('should be created', inject([EventsEmitService], (service: EventsEmitService) => {
    expect(service).toBeTruthy();
  }));
});
