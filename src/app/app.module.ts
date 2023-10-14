import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './page/login/login.component';
import { LayoutComponent } from './page/layout/layout.component';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HomeComponent } from './page/home/home.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CustomInterceptor } from './core/service/custom.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    OAuthModule.forRoot(),
  ],
  providers: [
   {provide:HTTP_INTERCEPTORS,useClass:CustomInterceptor,
   multi:true},
    provideOAuthClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
