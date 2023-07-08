import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  template: `
    <div class="relative">
      <input
        [type]="isPasswordType() ? 'password' : 'text'"
        class="input input-bordered w-full"
        [ngClass]="{ 'border-error': field && showError }"
        [formControl]="formControl"
        [formlyAttributes]="field"
      />
      <span
        class="material-symbols-outlined absolute right-5 top-3 cursor-pointer"
        (click)="changeInputType()"
      >
        {{ isPasswordType() ? "visibility" : "visibility_off"}}
      </span>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordComponent extends FieldType<FieldTypeConfig> {
  isPasswordType: WritableSignal<boolean> = signal(true);
  changeInputType() {
    this.isPasswordType.update((isPassword) => !isPassword);
  }
}
