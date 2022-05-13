import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostedAsComponent } from './posted-as.component';

@NgModule({
  declarations: [PostedAsComponent],
  exports: [PostedAsComponent],
  imports: [CommonModule],
})
export class PostedAsModule {}
