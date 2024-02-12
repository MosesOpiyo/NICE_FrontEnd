import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordToggle]',
  standalone: true
})
export class PasswordToggleDirective {

  private isPasswordVisible = false;

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    
  }

}
