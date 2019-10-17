import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {

    @Input('appStyle') color: string = 'blue'
    @Input('fontWeight') fontWeight: string = 'normal'

    constructor(private el: ElementRef, private renderer: Renderer2) {
        //this.renderer.setStyle(el.nativeElement, 'color',  'blue') // способ правильный
        //el.nativeElement.style.color = 'red' // способ некорректный назначения стиля
    }

    @HostListener('click', ['$event'])
    onClick(event: Event) { // событие клика 
        console.log(event)
    }

    @HostListener('mouseover', ['$event'])
    onMouseOver(event: Event) { 
        console.log(event)
        //this.renderer.setStyle(this.el.nativeElement, 'color',  'blue')
        this.renderer.setStyle(this.el.nativeElement, 'color',  this.color) // берем значение из передданого параметра
        this.renderer.setStyle(this.el.nativeElement, 'fontWeight',  this.fontWeight)
    }

    @HostListener('mouseout', ['$event'])
    onMouseOut(event: Event) { 
        console.log(event)
        this.renderer.setStyle(this.el.nativeElement, 'color',  '')
        this.renderer.setStyle(this.el.nativeElement, 'fontWeight',  '')
    }
}