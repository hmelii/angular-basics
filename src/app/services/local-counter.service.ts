import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class LocalCounterService {
  counter = 0

  constructor(private LogService: LogService) {

  }
  

  increase() {
    this.counter++
    this.LogService.log(this.counter)
  }

  decrease() {
    this.counter--
    this.LogService.log(this.counter)
  }
}
