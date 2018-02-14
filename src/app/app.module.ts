import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { ServiceUserInfo } from './service-user-info.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderSearchComponent,
    InfoUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ServiceUserInfo],
  bootstrap: [AppComponent]
})
export class AppModule { }
