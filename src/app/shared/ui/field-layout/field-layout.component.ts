import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  Input,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: 'ng-template[appFieldLayoutLabel]',
})
export class FieldLayoutLabelTemplateDirective {}

@Directive({
  selector: 'ng-template[appFieldLayoutContent]',
})
export class FieldLayoutContentTemplateDirective {}

@Component({
  selector: 'app-field-layout',
  template: `
    <div class="fieldContainer">
      <div class="container__layout">
        <div class="label__layout">
          <ng-container
            [ngTemplateOutlet]="labelTemplate || defaultLabelTemplate" />
        </div>
        <div class="content__layout">
          <ng-container [ngTemplateOutlet]="contentTemplate" />
        </div>
      </div>
    </div>

    <ng-template #defaultLabelTemplate>
      <label *ngIf="label" class="label__style">{{ label }}</label>
    </ng-template>
  `,
  styleUrls: ['./field-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldLayoutComponent {
  @Input() label?: string;
  @ContentChild(FieldLayoutLabelTemplateDirective, { read: TemplateRef })
  labelTemplate?: TemplateRef<any>;
  @ContentChild(FieldLayoutContentTemplateDirective, { read: TemplateRef })
  contentTemplate!: TemplateRef<any>;
}
