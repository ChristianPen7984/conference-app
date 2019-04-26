import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ConferenceComponent } from './conference/conference.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component'
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'conferences', component: ConferencesComponent },
  { path: 'conference/:title', component: ConferenceComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'map/:title', component: MapComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent, pathMatch: 'full', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
