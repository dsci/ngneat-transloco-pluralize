import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { httpLoader } from "./http-loader";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import {
  TRANSLOCO_CONFIG,
  TranslocoConfig,
  TranslocoModule
} from "@ngneat/transloco";
import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule, 
    TranslocoModule, 
    AppRoutingModule, 
    HttpClientModule,
    TranslocoMessageFormatModule.init()],
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  providers: [
    httpLoader,
    {
      provide: TRANSLOCO_CONFIG,
      useValue: {
        availableLangs: ["en", "de"],
        reRenderOnLangChange: true,
        fallbackLang: "de",
        defaultLang: "en"
      } as TranslocoConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
