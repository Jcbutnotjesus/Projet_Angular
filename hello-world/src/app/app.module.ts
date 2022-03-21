import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JanCornelisComponent } from './jan-cornelis/jan-cornelis.component';
import { JanCornelisModule } from './jan-cornelis/jan-cornelis.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, JanCornelisModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
