import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { AboutComponent } from './components/responsive/about/about.component';
import { ServicesComponent } from './components/responsive/services/services.component';
import { ResponsiveHomeComponent } from './components/responsive/home/responsivehome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResponsiveComponent,
    AboutComponent,
    ServicesComponent,
    ResponsiveHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
