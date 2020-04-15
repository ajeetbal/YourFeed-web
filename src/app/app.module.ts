import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import { ClarityDesignModule, FormModule } from "./modules";
import { RegistrationComponent } from "./components";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContentSectionComponent } from './components/content-section/content-section.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { QuotemachineComponent } from './components/quotemachine/quotemachine.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ContentSectionComponent,
    LoginComponent,
    QuotemachineComponent,
    UserProfileComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ClarityDesignModule,
    FormModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }