import { ConfigOption } from "@ngx-formly/core";
import { FormFieldComponent } from "./shared/ui/form-field/form-field.component";
import { InputPasswordComponent } from "./shared/ui/input-password/input-password.component";
import { InputComponent } from "./shared/ui/input/input.component";

export const formlyConfiguration: ConfigOption = {
  validationMessages: [{ name: 'required', message: 'This field is required' }],
  wrappers: [
    {
      name: 'form-field',
      component: FormFieldComponent,
    },
  ],
  types: [
    { name: 'input', component: InputComponent, wrappers: ['form-field'], },
    { name: 'password', component: InputPasswordComponent, wrappers: ['form-field'], },
  ],
}