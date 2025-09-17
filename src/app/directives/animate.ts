// animate.directive.ts
import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import { animate } from '@motionone/dom';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective implements AfterViewInit {
  @Input() appAnimate: any;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    if (this.appAnimate) {
      animate(this.el.nativeElement, this.appAnimate);
    }
  }
}
