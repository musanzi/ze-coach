import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ExternalLink,
  Instagram,
  LucideAngularModule,
  MessageCircle,
  Music2,
} from 'lucide-angular';

@Component({
  selector: 'app-landing-media',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LucideAngularModule],
  templateUrl: './media.html',
})
export class LandingMedia {
  readonly icons = {
    ExternalLink,
    Instagram,
    MessageCircle,
    Music2,
  } as const;
}
