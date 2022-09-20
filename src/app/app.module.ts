import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApiModule } from './backend/api.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule.forRoot({ rootUrl: '/api' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
