import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BlackModule } from './black/black.module';
import { MesaDelJuegoComponent } from './black/pages/mesa-del-juego/mesa-del-juego.component';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    BlackModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
