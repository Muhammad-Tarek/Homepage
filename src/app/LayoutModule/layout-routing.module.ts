import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../Modules/Home/home.module').then((m) => m.HomeModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
      },
      {
        path: '**',
        redirectTo: '/home', // We can create "not found page" and redirect to it
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
