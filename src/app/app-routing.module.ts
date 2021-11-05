import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";

// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";
import {ContactComponent} from "./views/contact/contact.component";
import {YourResidenceComponent} from "./views/services/your-residence/your-residence.component";
import {NosalquirelaComponent} from "./views/services/nosalquirela/nosalquirela.component";
import {DesignDinterieurComponent} from "./views/services/design-dinterieur/design-dinterieur.component";
import {WhyUsComponent} from "./views/why-us/why-us.component";
import {AboutUsComponent} from "./views/about-us/about-us.component";
import {AuthGuard} from "./guards/auth.guard";
import {AfterAuthGuard} from "./guards/after-auth.guard";
import {AdminGuard} from "./guards/admin.guard";
import {ClientDashboardComponent} from "./views/client/client-dashboard/client-dashboard.component";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  //service views
  {
    path: "services",
    children: [
      { path: "",redirectTo: "votrelogement", pathMatch: "full"},
      { path: "votrelogement", component: YourResidenceComponent},
      { path: "nosalquirela", component: NosalquirelaComponent},
      { path: "designdinterieur", component: DesignDinterieurComponent}
    ]
  },
  //why us views
  { path: "why-us", component: WhyUsComponent },
  //about us
  { path: "about-us", component: AboutUsComponent},
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    canActivate: [AfterAuthGuard],
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },

  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full"},
      { path: "dashboard", component: ClientDashboardComponent}
    ]
  } ,

  // no layout views
  { path: "landing", component: LandingComponent },
  { path: "contact", component: ContactComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
