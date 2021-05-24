import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { InterleavedPipe } from './Interleaved.pipe';
import { HighlightDirective } from './highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PowerBoostCalculatorComponent } from './power-boost-calculator.component';
import { InterleavedComponent } from './Interleaved.component';
import { UnlessDirective } from './unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    PowerBoostCalculatorComponent,
    InterleavedComponent,
    InterleavedPipe,
    UnlessDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
