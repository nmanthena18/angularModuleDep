import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtimsAboutComponent } from './etims-about/etims-about.component';
import { ETimsServiceComponent } from './e-tims-service/e-tims-service.component';

const routes: Routes = [
  { path: 'about', component: EtimsAboutComponent },
  { path: 'service', component: ETimsServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
