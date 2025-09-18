import { ElementRef } from '@angular/core';
import { AnimateDirective } from './animate';

describe('AnimateDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.createElement('div'));
    const directive = new AnimateDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
