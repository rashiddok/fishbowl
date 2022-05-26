import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appScrolledBottom]',
})
export class ScrolledBottomDirective implements AfterViewInit, OnDestroy {
  @Output() appScrolledBottom = new EventEmitter();

  private observer!: IntersectionObserver;

  get element() {
    return this.el.nativeElement;
  }

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const options = {
      root: this.isHostScrollable() ? this.el.nativeElement : null,
    };

    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.appScrolledBottom.emit();
    }, options);
    const watchElement = this.createWatchElement();
    this.observer.observe(watchElement);
  }

  createWatchElement(): HTMLElement {
    const elt = this.el.nativeElement as HTMLElement;
    const watcherElement = document.createElement('div');
    watcherElement.style.visibility = 'hidden';
    elt.appendChild(watcherElement);
    return watcherElement;
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.element);

    return (
      style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll'
    );
  }
}
