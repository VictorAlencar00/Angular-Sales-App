import { Component, Input, input } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'loading-bar',
  standalone: true,
  imports: [MaterialModule],
  template: `
    @if (visible) {
      <mat-progress-bar color="primary" mode="indeterminate">
      </mat-progress-bar>
    }
  `,
  styles: ``,
})
export class LoadingBarComponent {
  @Input() visible: boolean = true;
}
