import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolInput]'
})
export class CoolInputDirective{
  @Input() coolInputDefaultColor: string = 'white'
  @Input() coolInputFocusColor: string = 'orange'
  constructor(private el: ElementRef,
              private rend: Renderer2) {
  }

  private _backgroundColor: string = '';
  @HostBinding('style.backgroundColor')
  get getColor(){
    return this._backgroundColor;
  }

  @HostListener('focus')
  onFocus(){
    this.changeElementBGColor(this.coolInputFocusColor);

  }

  @HostListener('blur')
  onBlur(){
    this.changeElementBGColor(this.coolInputDefaultColor);

  }
  @HostListener('click', ['$event.target'])
  onClick(target: HTMLElement){
    console.log(target)
  }

  ngOnInit(){
    this.changeElementBGColor(this.coolInputDefaultColor);
    this.rend.setAttribute(this.el.nativeElement, 'placeholder',
      this.el.nativeElement.getAttribute('placeholder') + '*');

    // const text = this.rend.createElement('span');
    // this.rend.setProperty(text, 'innerText', '*Обязательно для заполнения');
    // this.rend.setStyle(text, 'color', 'red');
    // this.rend.insertBefore(this.el.nativeElement.parentElement, text, this.rend.nextSibling(this.el.nativeElement));
  }

  changeElementBGColor(color: string){
    this._backgroundColor = color;
  }

}
