import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ConferenceComponent } from './conference/conference.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConferenceSearchPipe } from './pipes/conference-search.pipe';
import { CalendarModalComponent } from './modals/calendar-modal/calendar-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    CalendarComponent,
    ConferenceComponent,
    ConferencesComponent,
    MapComponent,
    FooterComponent,
    NavbarComponent,
    ConferenceSearchPipe,
    CalendarModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
