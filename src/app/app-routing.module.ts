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
import {ClientHomesComponent} from "./views/client/client-houmes/client-homes.component";
import {UpdateUserProfileComponent} from "./views/admin/update-user-profile/update-user-profile.component";
import {AddClientHomeComponent} from "./views/admin/add-client-home/add-client-home.component";
import {UserProfileComponent} from './views/admin/user-profile/user-profile.component';
import {HousesComponent} from './views/admin/houses/houses.component';
import {AddReservationComponent} from './views/admin/add-reservation/add-reservation.component';
import {ReservationListComponent} from './views/admin/reservation-list/reservation-list.component';
import {MessagesComponent} from './views/admin/messages/messages.component';
import {ClientGuard} from './guards/client.guard';
import {SuperAdminDashboardComponent} from './views/superAdmin/super-admin-dashboard/super-admin-dashboard.component';
import {AdminsComponent} from './views/superAdmin/admins/admins.component';
import {SuperAdminGuard} from './guards/super-admin.guard';
import {ClientsComponent} from './views/superAdmin/clients/clients.component';
import {HousesSuperAdminComponent} from './views/superAdmin/houses/houses-super-admin.component';
import {ReservationsComponent} from './views/superAdmin/reservations/reservations.component';
import {MessagesSuperAdminComponent} from './views/superAdmin/messages-super-admin/messages-super-admin.component';
import {SeeReservationDetailsComponent} from './views/superAdmin/see-reservation-details/see-reservation-details.component';

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [ClientGuard, AuthGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: SettingsComponent },
      { path: "messages", component: MessagesComponent },
      { path: "reservations", component: ReservationListComponent },
      { path: "houses", component: HousesComponent },
      { path: "houses/reservation/:id", component: AddReservationComponent},
      { path: "users", component: TablesComponent},
      { path: "users/edit/:id", component: UpdateUserProfileComponent},
      { path: "users/add/:id", component: AddClientHomeComponent},
      { path: "users/see/:id", component: UserProfileComponent},
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
  { path: "whyUs", component: WhyUsComponent },
  //about us
  { path: "aboutUs", component: AboutUsComponent},
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

  //super admin views
  {
    path : "superAdmin",
    canActivate: [SuperAdminGuard],
    component: SuperAdminDashboardComponent,
    children: [
      { path : "", redirectTo: "admins", pathMatch: "full"},
      { path : "admins", component: AdminsComponent},
      { path : "clients", component: ClientsComponent},
      { path : "houses", component: HousesSuperAdminComponent},
      { path : "houses/:id", component: SeeReservationDetailsComponent},
      { path : "reservations", component: ReservationsComponent},
      { path : "messages", component: MessagesSuperAdminComponent},
    ]
  },

  //client views
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full"},
      { path: "dashboard", component: ClientDashboardComponent},
      { path: "houses/:id", component: ClientHomesComponent}
    ]
  } ,

  //no layout views
  { path: "contact", component: ContactComponent },
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "home", component: IndexComponent},
  { path: "**", redirectTo: "home" , pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
