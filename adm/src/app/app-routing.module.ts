import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { BuysComponent } from './buys/buys.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/login', pathMatch: 'full' },
//   { path: 'login', component: LoginComponent },
//   { path: 'users/:id', component: UserComponent },
//   { path: 'users', component: UsersComponent },
//   { path: 'buys', component: BuysComponent },
//   { path: 'products', component: ProductsComponent },
//   { path: 'products/:id', component: ProductComponent }
// ];

const routes: Routes = [
  { path: 'admin', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'users', component: UsersComponent },
  { path: 'buys', component: BuysComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 