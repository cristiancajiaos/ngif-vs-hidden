import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NgifComponent } from './ngif/ngif.component';
import { HiddenComponent } from './hidden/hidden.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NgifComponent,
    HiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
