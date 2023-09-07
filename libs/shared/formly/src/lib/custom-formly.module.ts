import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { translateValidationMessages } from './validation-messages';
import { FormlyMatInputModule } from '@ngx-formly/material/input';

export function HttpLoaderFactory(
  http: HttpClient,
): TranslateHttpLoader {
  return new TranslateHttpLoader(
    http,
    'global-assets/i18n/',
    '.json',
  );
}

@NgModule({
  imports: [
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    FormlyMatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [TranslateService, FormlyConfig],
      useFactory: translateValidationMessages,
    },
  ],
  exports: [
    FormlyModule,
    FormlyMaterialModule,
    FormlyMatInputModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class CustomFormlyModule {}
