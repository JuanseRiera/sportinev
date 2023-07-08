import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIf } from '@angular/common';
import {
  FieldWrapper,
  FormlyFieldConfig,
  FormlyFieldProps as CoreFormlyFieldProps,
  FormlyModule,
} from '@ngx-formly/core';
import { FieldLayoutModule } from '../field-layout/field-layout.module';

export interface FormlyFieldProps extends CoreFormlyFieldProps {
  hideRequiredMarker?: boolean;
  hideLabel?: boolean;
}

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [NgIf, FormlyModule, FieldLayoutModule],
  template: `
    <app-field-layout>
      <ng-template appFieldLayoutLabel>
        <label *ngIf="props.label && props.hideLabel !== true" [for]="id">
          {{ props.label }}
          <span
            *ngIf="props.required && props.hideRequiredMarker !== true"
            aria-hidden="true"
            >*</span
          >
        </label>
      </ng-template>

      <ng-template appFieldLayoutContent>
        <ng-container #fieldComponent></ng-container>

        <div>
          <small *ngIf="showError" class="text-error">
            <formly-validation-message [field]="field" />
          </small>
        </div>
      </ng-template>
    </app-field-layout>
  `,
  styles: [`
    :host app-field-layout{
      --field-layout-margin: 0 0 1rem 0;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent extends FieldWrapper<
  FormlyFieldConfig<FormlyFieldProps>
> {}
