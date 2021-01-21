import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cw5AboutComponent } from './cw5-about/cw5-about.component';
import { Cw5ServiceComponent } from './cw5-service/cw5-service.component';
import { AppResolve } from './_resolvers/app.resolver';
import { BlankComponent } from './blank.component';

const routes: Routes = [
  { path: 'about', component: Cw5AboutComponent },
  { path: 'service', component: Cw5ServiceComponent },
  { path: 'paymentmethod',
      component: BlankComponent,
      resolve: {
        paymentMethods: AppResolve
      }
    },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
