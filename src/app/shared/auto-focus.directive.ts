import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autoFocus]',
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private readonly el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}
