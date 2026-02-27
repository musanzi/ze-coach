import { ChangeDetectionStrategy, Component, afterNextRender } from '@angular/core';
import AOS from 'aos';
import { LandingHeader } from '../components/header/header';
import { LandingOverview } from '../components/overview/overview';
import { LandingServices } from '../components/services/services';
import { LandingModalities } from '../components/modalities/modalities';
import { LandingFaq } from '../components/faq/faq';
import { LandingMedia } from '../components/media/media';
import { LandingFooter } from '../components/footer/footer';

@Component({
  selector: 'app-landing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LandingHeader,
    LandingOverview,
    LandingServices,
    LandingModalities,
    LandingFaq,
    LandingMedia,
    LandingFooter,
  ],
  templateUrl: './landing.html',
})
export class Landing {
  constructor() {
    afterNextRender(() => {
      AOS.init({
        duration: 650,
        easing: 'ease-out-cubic',
        once: true,
        offset: 24,
      });
    });
  }
}
