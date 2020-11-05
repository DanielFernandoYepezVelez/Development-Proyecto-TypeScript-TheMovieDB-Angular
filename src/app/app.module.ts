import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Components */
import { AppComponent } from './app.component';

/* Othres Modules Application */
import { PagesModule } from './pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
