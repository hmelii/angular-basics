import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormArrayName } from '@angular/forms';
import MyValidators from '../../validators/my.validators'
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  form: FormGroup

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ],
      [ // в третьем параметры можно передавать асинхронные валидаторы
        MyValidators.uniqEmail
      ]
      ),        
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([]) 
    })

  }

  submit() {
    if (this.form.valid) {
      console.log('Form', this.form)
      const formData = { ...this.form.value }

      console.log('Form Data: ', formData)

      this.form.reset()
    }

    
  }

  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    }
    const cityKey = this.form.get('address').get('country').value;

    const city = cityMap[cityKey];

    this.form.patchValue({
      address: {
        city
      }
    })

  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(control) // явно назначаем тип (1 способ)
    //(this.form.get('skills') as FormArray).push() // (2 способ) 
  }

}
