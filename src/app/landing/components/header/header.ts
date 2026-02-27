import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
})
export class LandingHeader {}
