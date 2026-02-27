import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  Award,
  Building2,
  Calendar,
  ChevronDown,
  CircleQuestionMark,
  LucideAngularModule,
  Monitor,
  UsersRound,
} from 'lucide-angular';

@Component({
  selector: 'app-landing-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  templateUrl: './faq.html',
})
export class LandingFaq {
  readonly icons = {
    Award,
    Building2,
    Calendar,
    ChevronDown,
    CircleQuestionMark,
    Monitor,
    UsersRound,
  } as const;
}
