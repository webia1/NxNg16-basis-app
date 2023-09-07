import { TranslateService } from '@ngx-translate/core';

export function translateValidationMessages(ts: TranslateService) {
  return {
    validationMessages: [
      {
        name: 'required',
        message: () => ts.instant('VALIDATION.REQUIRED'),
      },
    ],
  };
}
