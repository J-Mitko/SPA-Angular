import { MoviesModule } from './movies/movies.module';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { routes } from './app.router';

import { MoviesService } from './movies/movies.service';
import { DocumentRef } from './document.service';
import { WindowRef } from './shared/window.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    MoviesModule,
    SharedModule.forRoot(),
    routes
  ],
  providers: [
<<<<<<< HEAD
    MoviesService
=======
    MoviesService,
    DocumentRef,
    WindowRef
>>>>>>> master
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
