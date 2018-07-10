import { LiveComponent } from './../live/live/live.component';
import { AnalysisComponent } from './../analysis/analysis.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: AnalysisComponent },
  { path: 'live', component: LiveComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true })
  ],
  declarations: [],
  exports: [RouterModule]
})

export class RoutingmoduleModule { }
