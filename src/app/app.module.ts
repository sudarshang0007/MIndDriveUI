

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingmoduleModule } from './routingmodule/routingmodule.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { LiveComponent } from './live/live/live.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { CurrentComponent } from './live/live/current/current.component';
import { VehicleProfileComponent } from './vehicle-profile/vehicle-profile.component';
import { FormsModule } from '@angular/forms';

import { TripComponent } from './live/live/triplist/trip.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    AnalysisComponent,
    LiveComponent,
    CurrentComponent,
    VehicleProfileComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingmoduleModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
