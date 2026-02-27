import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChevronRight, LucideAngularModule, MessageSquareQuote } from 'lucide-angular';

@Component({
  selector: 'app-landing-modalities',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  templateUrl: './modalities.html',
})
export class LandingModalities {
  readonly icons = {
    ChevronRight,
    MessageSquareQuote,
  } as const;
}
