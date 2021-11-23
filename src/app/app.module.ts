import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

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

// components for views and layouts

import { AdminNavbarComponent } from "./components/navbars/admin-navbar/admin-navbar.component";
import { AuthNavbarComponent } from "./components/navbars/auth-navbar/auth-navbar.component";
import { CardPageVisitsComponent } from "./components/cards/card-page-visits/card-page-visits.component";
import { CardProfileComponent } from "./components/cards/card-profile/card-profile.component";
import { CardSettingsComponent } from "./components/cards/card-settings/card-settings.component";
import { CardSocialTrafficComponent } from "./components/cards/card-social-traffic/card-social-traffic.component";
import { CardTableComponent } from "./components/cards/card-table/card-table.component";
import { FooterAdminComponent } from "./components/footers/footer-admin/footer-admin.component";
import { FooterComponent } from "./components/footers/footer/footer.component";
import { FooterSmallComponent } from "./components/footers/footer-small/footer-small.component";
import { HeaderStatsComponent } from "./components/headers/header-stats/header-stats.component";
import { PagesDropdownComponent } from "./components/dropdowns/pages-dropdown/pages-dropdown.component";
import { ContactComponent } from './views/contact/contact.component';
import { YourResidenceComponent } from './views/services/your-residence/your-residence.component';
import { NosalquirelaComponent } from './views/services/nosalquirela/nosalquirela.component';
import {Clipboard} from "@angular/cdk/clipboard";
import { DesignDinterieurComponent } from './views/services/design-dinterieur/design-dinterieur.component';
import { WhyUsComponent } from './views/why-us/why-us.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Ng2TelInputModule} from "ng2-tel-input";
import {JwtInterceptor} from "./interceptor/jwt.interceptor";
import { ClientSidebarComponent } from './components/sidebars/client-sidebar/client-sidebar.component';
import {AdminSidebarComponent} from "./components/sidebars/admin-sidebar/admin-sidebar.component";
import { ClientDashboardComponent } from './views/client/client-dashboard/client-dashboard.component';
import { ClientNavbarComponent } from './components/navbars/client-navbar/client-navbar.component';
import {HeaderClientStatsComponent} from "./components/headers/header-client-stats/header-client-stats.component";
import {AgmCoreModule} from "@agm/core";
import { ClientHomesComponent } from './views/client/client-houmes/client-homes.component';
import { CardProfileAdminComponent } from './components/cards/card-profile-admin/card-profile-admin.component';
import { UpdateUserProfileComponent } from './views/admin/update-user-profile/update-user-profile.component';
import { AddClientHomeComponent } from './views/admin/add-client-home/add-client-home.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ClientService} from './services/client.service';
import { UserProfileComponent } from './views/admin/user-profile/user-profile.component';
import { AllHousesComponent } from './components/cards/all-houses/all-houses.component';
import { HousesComponent } from './views/admin/houses/houses.component';
import { HousesSuperAdminComponent } from './views/superAdmin/houses/houses-super-admin.component';
import { HousesListComponent } from './components/cards/houses-list/houses-list.component';
import { AddReservationComponent } from './views/admin/add-reservation/add-reservation.component';
import { AddReservationFormComponent } from './components/cards/add-reservation-form/add-reservation-form.component';
import { ReservationListComponent } from './views/admin/reservation-list/reservation-list.component';
import { MessagesComponent } from './views/admin/messages/messages.component';
import {SuperAdminDashboardComponent} from './views/superAdmin/super-admin-dashboard/super-admin-dashboard.component';
import { SuperAdminSidebarComponent } from './components/sidebars/super-admin-sidebar/super-admin-sidebar.component';
import { AdminsComponent } from './views/superAdmin/admins/admins.component';
import { ClientsComponent } from './views/superAdmin/clients/clients.component';
import { ReservationsComponent } from './views/superAdmin/reservations/reservations.component';
import { MessagesSuperAdminComponent } from './views/superAdmin/messages-super-admin/messages-super-admin.component';
import {SearchFilterPipe} from './pipe/superAdmin-admin-filter/search-filter.pipe';
import {
  DayService,
  MonthAgendaService,
  MonthService,
  RecurrenceEditorModule,
  ScheduleModule,
  WeekService,
  WorkWeekService
} from '@syncfusion/ej2-angular-schedule';
import { SeeReservationDetailsComponent } from './views/superAdmin/see-reservation-details/see-reservation-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PagesDropdownComponent,
    FooterComponent,
    FooterSmallComponent,
    FooterAdminComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardTableComponent,
    HeaderStatsComponent,
    AdminSidebarComponent,
    AuthNavbarComponent,
    AdminNavbarComponent,
    AdminComponent,
    AuthComponent,
    MapsComponent,
    SettingsComponent,
    TablesComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    ProfileComponent,
    ContactComponent,
    YourResidenceComponent,
    NosalquirelaComponent,
    DesignDinterieurComponent,
    WhyUsComponent,
    AboutUsComponent,
    ClientSidebarComponent,
    ClientDashboardComponent,
    ClientNavbarComponent,
    HeaderClientStatsComponent,
    ClientHomesComponent,
    CardProfileAdminComponent,
    UpdateUserProfileComponent,
    AddClientHomeComponent,
    UserProfileComponent,
    AllHousesComponent,
    HousesComponent,
    HousesSuperAdminComponent,
    HousesListComponent,
    AddReservationComponent,
    AddReservationFormComponent,
    ReservationListComponent,
    MessagesComponent,
    SuperAdminDashboardComponent,
    SuperAdminSidebarComponent,
    AdminsComponent,
    ClientsComponent,
    ReservationsComponent,
    MessagesSuperAdminComponent,
    SearchFilterPipe,
    SeeReservationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2TelInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNo05fM85cJ6bdfkXAhTZG0A_NA7Q-rbA',
    }),
    NgxPaginationModule,
    FormsModule,
    ScheduleModule,
    RecurrenceEditorModule
  ],
  providers: [
    Clipboard,
    ClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    MonthAgendaService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
