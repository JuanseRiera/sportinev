import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-5">
      <h1 class="text-4xl font-bold text-slate-600">Log in</h1>

      <Span>ENJOY</Span>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogInComponent {}
