import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { SettingsnavbarComponent } from './settingsnavbar/settingsnavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [SettingsnavbarComponent, FooternavbarComponent, AsidenavbarComponent, TopnavbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule   
  ],
  exports: [
    TopnavbarComponent,
    AsidenavbarComponent,
    FooternavbarComponent,
    SettingsnavbarComponent    
  ]
})
export class LayoutModule { }
