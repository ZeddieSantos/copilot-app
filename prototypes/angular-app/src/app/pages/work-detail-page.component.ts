import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-work-detail-page',
  standalone: true,
  templateUrl: './work-detail-page.component.html',
  styleUrl: './work-detail-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkDetailPageComponent {}
