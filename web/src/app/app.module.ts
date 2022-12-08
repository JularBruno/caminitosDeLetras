import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule, ModalModule, TypeaheadModule, BsDropdownModule } from 'ngx-bootstrap';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecaptchaModule } from 'ng-recaptcha';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopmenuComponent } from './shared/topmenu/topmenu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ToastModule } from 'ng2-toastr';

// import { ProgressComponent } from './shared/progress/progress.component';
// import { HeaderTitleComponent } from './shared/header-title/header-title.component';

import { NgAutonumericModule } from '@angularfy/ng-autonumeric';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CongratsComponent } from './congrats/congrats.component';
import { RecordsComponent } from './records/records.component';
import { RecordComponent } from './record/record.component';
import { AboutComponent } from './about/about.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'congrats', component: CongratsComponent },
  { path: 'records', component: RecordsComponent },
  { path: 'record', component: RecordComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProductComponent,
    CarritoComponent,
    CongratsComponent,
    TopmenuComponent,
    FooterComponent,
    // ProgressComponent,
    // HeaderTitleComponent,
    RecordsComponent,
    RecordComponent,
    AboutComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule, HttpModule, LazyLoadImageModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    TypeaheadModule.forRoot(),
    CarouselModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    RecaptchaModule.forRoot(),
    BsDropdownModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByJpPJ8Dvk1BbKdUoMru1NHWsyh9U0Sg4'
    }),
    NgAutonumericModule,
    AngularFontAwesomeModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
