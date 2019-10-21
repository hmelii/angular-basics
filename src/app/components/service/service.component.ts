import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';
import { LocalCounterService } from '../../services/local-counter.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [LocalCounterService] // локальное подключения сервиса
})
export class ServiceComponent implements OnInit {

  constructor(
    private counterService: CounterService, 
    private localCounterService: LocalCounterService // почему то не работает
  ) { 

  }

  ngOnInit() {
  }

}
