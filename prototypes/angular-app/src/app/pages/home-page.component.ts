import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface WorkItem {
  readonly title: string;
  readonly summary: string;
  readonly year: string;
  readonly category: string;
  readonly image: string;
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent {
  protected readonly featuredWorks: readonly WorkItem[] = [
    {
      title: 'Designing Dashboards',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      year: '2020',
      category: 'Dashboard',
      image: 'img/Rectangle 30.png'
    },
    {
      title: 'Vibrant Portraits of 2020',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      year: '2018',
      category: 'Illustration',
      image: 'img/Rectangle 32.png'
    },
    {
      title: '36 Days of Malayalam type',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      year: '2018',
      category: 'Typography',
      image: 'img/Rectangle 34.png'
    }
  ];
}
