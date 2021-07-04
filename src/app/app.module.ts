import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpserService } from './httpser.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { App1Component } from './app1/app1.component';
@NgModule({
  declarations: [
    AppComponent,
    App1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
