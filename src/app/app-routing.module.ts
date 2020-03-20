import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./components";
import { HeaderComponent } from './components/header/header.component';


const routes: Routes = [
  { path: "landing", children: [
    { path: "registration", component: RegistrationComponent },
    { path: "", redirectTo: "registration", pathMatch: "full" }
  ] },
  { path: "", redirectTo: "landing", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
