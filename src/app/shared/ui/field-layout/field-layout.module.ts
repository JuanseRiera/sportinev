import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldLayoutComponent, FieldLayoutContentTemplateDirective, FieldLayoutLabelTemplateDirective } from './field-layout.component';

@NgModule({
  declarations: [
    FieldLayoutComponent,
    FieldLayoutLabelTemplateDirective,
    FieldLayoutContentTemplateDirective,
  ],
  imports: [CommonModule],
  exports: [
    FieldLayoutComponent,
    FieldLayoutLabelTemplateDirective,
    FieldLayoutContentTemplateDirective,
  ]
})
export class FieldLayoutModule {}
