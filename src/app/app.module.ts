import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { GetStartedCardComponent } from './sections/hero/get-started-card/get-started-card.component';
import { WhatWeDoComponent } from './sections/what-we-do/what-we-do.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { ClientsComponent } from './sections/clients/clients.component';
import { DemoComponent } from './sections/demo/demo.component';
import { FooterComponent } from './sections/footer/footer.component';
import { TabContentComponent } from './sections/what-we-do/tab-content/tab-content.component';
import { BenefitCardComponent } from './sections/benefits/benefit-card/benefit-card.component';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    GetStartedCardComponent,
    HeroComponent,
    WhatWeDoComponent,
    BenefitsComponent,
    ClientsComponent,
    DemoComponent,
    FooterComponent,
    TabContentComponent,
    BenefitCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    NgxNavbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
