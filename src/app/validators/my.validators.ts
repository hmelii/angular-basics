import { FormControl, FormControlName } from '@angular/forms';
import { Observable } from 'rxjs';

class MyValidators {
    
    static restrictedEmails(control: FormControl): {[key: string]: boolean} { // проверям emails на стоп лист
        if (['v@Mmail.ru', 'test@mail.ru'].includes(control.value)) { // в случае оишбки
            return {
                restrictedEmail: true
            }
        }

        return null; // возвращается по умолчанию если нет ошибки
    }

    static uniqEmail(control: FormControl): Promise<any> | Observable<any> { // асинхронный обрабочик ошибки
        return new Promise(resolve => {
            setTimeout(() => { // эмуляция запроса к серверу
                if (control.value === 'async@mail.ru') {
                    resolve({
                        uniqEmail: true
                    })
                } else {
                    return resolve(null)
                } 
                
                
            }, 5000)    
        })
    }
}

export default MyValidators