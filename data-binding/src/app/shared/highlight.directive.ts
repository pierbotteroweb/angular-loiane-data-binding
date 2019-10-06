import { Directive, HostListener, ElementRef, Renderer, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,'background-color','yellow'
    // )
    this.backgroundColor = this.defaultColor

  }

  @HostListener('mouseleave') onMouseLEave(){
    // this._renderer.setElementStyle(
    //   this._elementRef.nativeElement,'background-color','white'
    // )
    this.backgroundColor = this.highlightColor

  }

  // @HostBinding('style.backgroundColor') backgroundColor: string
  @HostBinding('style.backgroundColor') get setColor(){
   return this.backgroundColor
  }

  private backgroundColor: string;

  @Input() defaultColor: string = 'white'
  @Input('highlight') highlightColor: string = 'yellow'

  


  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer,
    ) { }

    ngOnInit(){
      this.backgroundColor = this.defaultColor
    }

}
