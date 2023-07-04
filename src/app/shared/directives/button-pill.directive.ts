import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonPill]',
  standalone: true,
})
export class ButtonPillDirective {
  @Input("class") set setClasses(classes: string){
    this.addStyles(classes);
  }
  staticClasses: string =
    'p-3 rounded-full drop-shadow-md hover:-translate-y-1 hover:drop-shadow-lg transition-all active:translate-y-0 active:drop-shadow-md';

  constructor(private el: ElementRef,private renderer2: Renderer2) {
    this.addStyles("");
  }

  addStyles(classes: string) {
    this.renderer2.setAttribute(this.el.nativeElement,"class",`${this.staticClasses} ${classes}`);
  }
}
