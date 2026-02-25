import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

interface BlogPost {
  readonly title: string;
  readonly date: string;
  readonly category: string;
  readonly summary: string;
}

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogPageComponent {
  protected readonly posts: readonly BlogPost[] = [
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      category: 'Express, Handlebars',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    },
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      category: 'Express, Handlebars',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    },
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      category: 'Express, Handlebars',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    },
    {
      title: 'UI Interactions of the week',
      date: '12 Feb 2019',
      category: 'Express, Handlebars',
      summary: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
    }
  ];
}
