import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonPillDirective } from '../shared/directives/button-pill.directive';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule,ButtonPillDirective],
  templateUrl: './landing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent {}
