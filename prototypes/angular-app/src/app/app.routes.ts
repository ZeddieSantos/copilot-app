import { Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page.component';
import { HomePageComponent } from './pages/home-page.component';
import { WorkDetailPageComponent } from './pages/work-detail-page.component';
import { WorkPageComponent } from './pages/work-page.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: 'home',
		component: HomePageComponent
	},
	{
		path: 'work',
		component: WorkPageComponent
	},
	{
		path: 'work-detail',
		component: WorkDetailPageComponent
	},
	{
		path: 'blog',
		component: BlogPageComponent
	},
	{
		path: '**',
		redirectTo: 'home'
	}
];
