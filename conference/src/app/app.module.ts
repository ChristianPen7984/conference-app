import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { CalendarModalComponent } from './modals/calendar-modal/calendar-modal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ConferenceComponent } from './conference/conference.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { ConferencesPipe } from './pipes/conference-search.pipe';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { CreateModalComponent } from './modals/create-modal/create-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ConferencesComponent,
    CalendarModalComponent,
    CalendarComponent,
    ConferenceComponent,
    MapComponent,
    ConferencesPipe,
    AboutComponent,
    LoginComponent,
    CreateComponent,
    CreateModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCiWz-PeKO7KHS2rfHOhKfg-uJb19XXO-c'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
