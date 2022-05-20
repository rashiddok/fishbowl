import { NgModule } from '@angular/core';
import { ScrolledBottomDirective } from './scrolledBottom.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ScrolledBottomDirective],
  imports: [CommonModule],
  exports: [ScrolledBottomDirective],
})
export class ScrolledBottomModule {}
