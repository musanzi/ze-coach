import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
} from '@angular/core';
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
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
      if (!('IntersectionObserver' in window) || elements.length === 0) {
        elements.forEach((el) => {
          el.classList.add('is-visible', 'animate__fadeInUp');
        });
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('is-visible', 'animate__fadeInUp');
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.15 },
      );
      elements.forEach((el) => observer.observe(el));
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
