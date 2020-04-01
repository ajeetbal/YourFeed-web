import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./components";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentSectionComponent } from './components/content-section/content-section.component'
import { QuotemachineComponent } from './components/quotemachine/quotemachine.component';

const routes: Routes = [
  {
    path: "landing", children: [
      { path: "registration", component: RegistrationComponent },
      { path: "content-section", component: ContentSectionComponent },
      { path: "quote-machine", component: QuotemachineComponent }
    ]
  },
  { path: "", redirectTo: "landing", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
