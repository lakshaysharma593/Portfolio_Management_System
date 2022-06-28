import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StockComponent } from './stock/stock.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { NetworthComponent } from './networth/networth.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'stocks', component:StockComponent},
  {path:'mutual-funds', component:MutualfundsComponent},
  {path:'net-worth', component:NetworthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
