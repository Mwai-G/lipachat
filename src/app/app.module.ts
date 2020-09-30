import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { WhatWeDoComponent } from './sections/what-we-do/what-we-do.component';
import { BenefitsComponent } from './sections/benefits/benefits.component';
import { ClientsComponent } from './sections/clients/clients.component';
import { DemoComponent } from './sections/demo/demo.component';
import { FooterComponent } from './sections/footer/footer.component';
import { GetStartedCardComponent } from './hero/get-started-card/get-started-card.component';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    HeroComponent,
    WhatWeDoComponent,
    BenefitsComponent,
    ClientsComponent,
    DemoComponent,
    FooterComponent,
    GetStartedCardComponent,
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
