import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-landing-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
})
export class LandingFooter {}
