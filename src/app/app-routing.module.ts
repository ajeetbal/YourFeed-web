import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./components";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: "landing", children: [
    { path: "registration", component: RegistrationComponent },
    { path: "home", component: HomeComponent },
    { path: "", redirectTo: "registration", pathMatch: "full" }
  ] },
  { path: "", redirectTo: "landing", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
