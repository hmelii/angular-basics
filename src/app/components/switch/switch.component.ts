import { Component, OnInit, Provider, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent), // здесь указываем колбэк наш компонент
  multi: true
}

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR] // не забываем про провайдер
})
export class SwitchComponent implements ControlValueAccessor {

  state = 'off';

  private onChange = (value: any) => {}

  setState(state: string) {
    this.state = state;
    this.onChange(this.state)
  }
  
  writeValue(state: string): void {
    this.state = state
  }

  registerOnChange(fn: any): void {
    this.onChange = fn // регистрируем наш onChange
  }

  registerOnTouched(fn: any): void {
    
  }

  setDisabledState(isDisabled: boolean):void {

  }

  

}
