import { Directive, ElementRef, Renderer2, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {

    @Input('appStyle') color: string = 'blue'
    @Input('dclassName') dclassName: string = ''
    @Input('fontSize') fontSize: string = '12px'
    @Input('fontWeight') fontWeight: string = 'normal'
    @Input('number') number: number = 0
    @Input() dStyle: {border?: string, fontStyle?: string, borderRadius?: string}

    @HostBinding('style.color') elColor = '' // ещё один способ взаимодействия
    @HostBinding('className') elClass = '' // ещё один способ взаимодействия

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
        // this.renderer.setStyle(this.el.nativeElement, 'color',  this.color) // берем значение из передданого параметра
        // this.renderer.setStyle(this.el.nativeElement, 'fontWeight',  this.fontWeight)
        // this.renderer.setStyle(this.el.nativeElement, 'fontStyle',  this.dStyle.fontStyle)
        // this.renderer.setStyle(this.el.nativeElement, 'border',  this.dStyle.border)
        // this.renderer.setStyle(this.el.nativeElement, 'borderRadius',  this.dStyle.borderRadius)
        this.elColor = this.color
        this.elClass = this.dclassName

        console.log(this.number) // если хотим передать другое значение отличное от string
    }

    @HostListener('mouseout', ['$event'])
    onMouseOut(event: Event) { 
        console.log(event)
        // this.renderer.setStyle(this.el.nativeElement, 'color',  '')
        // this.renderer.setStyle(this.el.nativeElement, 'fontWeight',  '')
        // this.renderer.setStyle(this.el.nativeElement, 'border',  '')
        // this.renderer.setStyle(this.el.nativeElement, 'fontStyle',  '')
        // this.renderer.setStyle(this.el.nativeElement, 'borderRadius',  '')

        this.elColor = ''
        this.elClass = ''
    }
}