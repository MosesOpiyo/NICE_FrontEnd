import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appLongPress]'
})
export class LongPressDirective {

  @Output() longPress = new EventEmitter<void>();
  private longPressTimeout: any;

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: Event): void {
    this.longPressTimeout = setTimeout(() => {
      this.longPress.emit();
    }, 1000);
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onMouseUp(): void {
    clearTimeout(this.longPressTimeout);
  }

}
