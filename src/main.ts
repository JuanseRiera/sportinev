import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { GlobalService } from './app/shared/services/global.service';

function appConfigFactory(globalService: GlobalService) {
  return (): Promise<any> => {
    return globalService.constructor();
  }
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    {
      provide: APP_INITIALIZER,
      useFactory: ()=>appConfigFactory,
      deps: [GlobalService],
      multi: true
    }
  ],
}).catch((err) => console.error(err));
