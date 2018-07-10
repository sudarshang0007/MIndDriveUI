import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingmoduleModule } from './routingmodule/routingmodule.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { LiveComponent } from './live/live/live.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    AnalysisComponent,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    RoutingmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
