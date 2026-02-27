import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  afterNextRender,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  ChevronRight,
  CircleHelp,
  ExternalLink,
  Globe,
  GraduationCap,
  Instagram,
  Lightbulb,
  LucideAngularModule,
  LUCIDE_ICONS,
  MessageCircle,
  MessageSquareQuote,
  Music2,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  LucideIconProvider,
} from 'lucide-angular';

@Component({
  selector: 'app-landing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider({
        ArrowRight,
        BadgeCheck,
        BookOpen,
        BriefcaseBusiness,
        ChevronRight,
        CircleHelp,
        ExternalLink,
        Globe,
        GraduationCap,
        Instagram,
        Lightbulb,
        MessageCircle,
        MessageSquareQuote,
        Music2,
        Phone,
        Rocket,
        ShieldCheck,
        Sparkles,
        Target,
      }),
    },
  ],
  templateUrl: './landing.html',
})
export class Landing {
  private readonly destroyRef = inject(DestroyRef);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
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
}
