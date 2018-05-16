import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsEmitService {
  navchange: EventEmitter<number> = new EventEmitter();
  constructor() { }
  emitNavChangeEvent(number) {
    this.navchange.emit(number);
  }
  getNavChangeEmitter() {
    return this.navchange;
  }
}
