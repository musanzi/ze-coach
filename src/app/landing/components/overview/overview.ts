import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  BadgeCheck,
  BookOpen,
  BriefcaseBusinessIcon,
  Globe,
  GraduationCap,
  Lightbulb,
  LucideAngularModule,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-angular';

@Component({
  selector: 'app-landing-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  templateUrl: './overview.html',
})
export class LandingOverview {
  readonly icons = {
    BadgeCheck,
    BookOpen,
    BriefcaseBusinessIcon,
    Globe,
    GraduationCap,
    Lightbulb,
    MessageCircle,
    Rocket,
    ShieldCheck,
    Sparkles,
    Target,
  } as const;
}
