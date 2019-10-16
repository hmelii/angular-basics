import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.renderer.setStyle(el.nativeElement, 'color',  'blue') // способ правильный
        //el.nativeElement.style.color = 'red' // способ некорректный назначения стиля
    }
}