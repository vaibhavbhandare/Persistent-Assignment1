import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { SportsComponent } from './sports/sports.component';
import { AddSportsComponent } from './sports/add-sports/addsports.component';
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.states';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SportsComponent,
    AddSportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(reducers, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
