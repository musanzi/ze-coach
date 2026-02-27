import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, TitleStrategy } from '@angular/router';

import { routes } from './app.routes';
import { PageTitleStrategy } from './page-title.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: TitleStrategy, useClass: PageTitleStrategy },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
  ],
};
