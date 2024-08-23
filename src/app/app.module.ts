import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import the FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { BindingPageComponent } from './pages/binding-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BindingPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
