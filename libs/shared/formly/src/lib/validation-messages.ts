import { TranslateService } from '@ngx-translate/core';

export function translateValidationMessages(
  translateService: TranslateService,
) {
  return {
    validationMessages: [
      {
        name: 'required',
        message: () =>
          translateService.instant('VALIDATION.REQUIRED'),
      },
    ],
  };
}
