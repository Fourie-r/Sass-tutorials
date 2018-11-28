import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { AboutComponent } from './components/responsive/about/about.component';
import { ServicesComponent } from './components/responsive/services/services.component';
import { ResponsiveHomeComponent } from './components/responsive/home/responsivehome.component';
import { GridComponent } from './components/grid/grid.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'grid', component: GridComponent },

  {
    path: 'responsive',
    component: ResponsiveComponent,
    children: [
      { path: '', component: ResponsiveHomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
    ]
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
