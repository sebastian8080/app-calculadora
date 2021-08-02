import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SumaComponent } from './components/suma/suma.component';
import { FormsModule } from '@angular/forms';
import { ResultadoComponent } from './components/resultado/resultado.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
