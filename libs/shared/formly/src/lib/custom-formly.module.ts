import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  imports: [
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    ReactiveFormsModule,
    // andere Module
  ],
  exports: [
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
  ],
})
export class CustomFormlyModule {}
