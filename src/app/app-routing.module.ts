import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationComponent } from "./components";


const routes: Routes = [
  { path: "landing", children: [
    { path: "registration", component: RegistrationComponent },
    { path: "", redirectTo: "registration", pathMatch: "full" }
  ] },
  { path: "", redirectTo: "landing", pathMatch: "full" },
   {path: "", redirectTo: 'dashboard', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
