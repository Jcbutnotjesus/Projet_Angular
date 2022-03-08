import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JanCornelisComponent } from './jan-cornelis/jan-cornelis.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, JanCornelisComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
