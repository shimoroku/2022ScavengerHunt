import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { CommandService } from './services/commandService';
import { CommandInfoDisplayComponent } from './components/command-info-display/command-info-display.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CommandInfoDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
