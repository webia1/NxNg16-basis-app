import { CustomMaterialModule } from '@angular-basis-app-workspace/shared-ui';
import { CustomFormlyModule } from '@angular-basis-app-workspace/shared-formly';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'angular-basis-app-workspace-demos',
  standalone: true,
  imports: [CommonModule, CustomMaterialModule, CustomFormlyModule],
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss'],
})
export class DemosComponent {
  form = new FormGroup({});

  model = { email: '' };

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      },
    },
  ];

  onSubmit(model: unknown) {
    console.log(model);
  }
}
