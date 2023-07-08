import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, FormlyModule],
  template: `
    <div class="p-5">
      <h1 class="text-2xl font-bold mb-2 text-orange-300 dark:text-gray-100">
        Log in
      </h1>
      <span class="text-gray-600 dark:text-gray-100 font-bold">
        Please enter your credentials
      </span>

      <form [formGroup]="form" (ngSubmit)="onSubmit(model)" class="mt-5">
        <formly-form [form]="form" [fields]="fields" [model]="model" />
        <button type="submit" class="btn btn-primary w-full mt-5">
          Submit
        </button>
      </form>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInComponent {
  form = new FormGroup({});
  model = { email: '' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        placeholder: 'Email',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'password',
      props: {
        placeholder: 'Password',
        required: true,
      },
    },
  ];

  onSubmit(model: any) {
    console.log(model);
  }
}
