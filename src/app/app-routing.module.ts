import { ConclusionPageComponent } from './conclusion-page/conclusion-page.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },

  {
    path: 'conclusion/:success',
    component: ConclusionPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
