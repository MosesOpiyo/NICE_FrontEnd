import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]'
})
export class PasswordToggleDirective {

  private isPasswordVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    
  }

}
