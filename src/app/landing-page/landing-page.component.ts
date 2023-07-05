import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonPillDirective } from '../shared/directives/button-pill.directive';
import { GlobalService } from '../shared/services/global.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule,NgIf,ButtonPillDirective],
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {
  globalService = inject(GlobalService);

  protected isDarkThemeEnable = this.globalService.isDarkThemeEnable;

  toogleDarkTheme(){
    this.globalService.toogleDarkTheme();
  }
}
