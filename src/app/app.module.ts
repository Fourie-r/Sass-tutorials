import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';
import { AboutComponent } from './components/responsive/about/about.component';
import { ServicesComponent } from './components/responsive/services/services.component';
import { ResponsiveHomeComponent } from './components/responsive/home/responsivehome.component';
import { GridComponent } from './components/grid/grid.component';
import { HeaderComponent } from './components/grid/header/header.component';
import { SubHeaderComponent } from './components/grid/sub-header/sub-header.component';
import { FooterComponent } from './components/grid/footer/footer.component';
import { DataService } from './components/grid/services/data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResponsiveComponent,
    AboutComponent,
    ServicesComponent,
    ResponsiveHomeComponent,
    GridComponent,
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
