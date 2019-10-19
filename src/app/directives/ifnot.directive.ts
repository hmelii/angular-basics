import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIfNot]'
})
export class IfnotDirective {

  @Input('appIfNot') set ifNot(condition: boolean) {
    if (condition) {
      // показать элементы
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      //скрыть
      this.viewContainer.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { 

    console.log('templateRef ', this.templateRef)
    console.log('viewContainer ', this.viewContainer)
  }

  

}
