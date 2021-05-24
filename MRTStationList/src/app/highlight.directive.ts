import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector:'[appHighlight]'
})

export class HighlightDirective{
  constructor(private el:ElementRef){}
  //為什麼一定要寫成 highlightColor? : string 或是 highlightColor : string undefined:
  @Input('appHighlight') highlightColor? : string;
  @Input() defaultColor = '';
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('');
  }

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
