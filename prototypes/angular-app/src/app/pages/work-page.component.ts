import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface WorkCard {
  readonly title: string;
  readonly summary: string;
  readonly year: string;
  readonly category: string;
  readonly image: string;
}

@Component({
  selector: 'app-work-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-page.component.html',
  styleUrl: './work-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkPageComponent {
  protected readonly works: readonly WorkCard[] = [
    {
      title: 'Designing Dashboards',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      year: '2020',
      category: 'Dashboard',
      image: 'images/work-dashboard.png'
    },
    {
      title: 'Vibrant Portraits of 2020',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      year: '2018',
      category: 'Illustration',
      image: 'images/work-portrait.png'
    },
    {
      title: '36 Days of Malayalam type',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      year: '2018',
      category: 'Typography',
      image: 'images/work-typography.png'
    },
    {
      title: 'Components',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      year: '2018',
      category: 'Components, Design',
      image: 'images/work-components.png'
    }
  ];
}
