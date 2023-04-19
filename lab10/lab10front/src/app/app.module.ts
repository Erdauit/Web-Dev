import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompaniesComponent} from './components/companies/companies.component';
import {HomeComponent} from './components/home/home.component';
import {VacanciesComponent} from './components/vacancies/vacancies.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {CreatecompanyComponent} from './components/createcompany/createcompany.component';
import {CreatevacancyComponent} from './components/createvacancy/createvacancy.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpdatecompanyComponent} from './components/updatecompany/updatecompany.component';
import {UpdatevacancyComponent} from './components/updatevacancy/updatevacancy.component';
import {VacanciesbycompanyComponent} from './components/vacanciesbycompany/vacanciesbycompany.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    HomeComponent,
    VacanciesComponent,
    NavbarComponent,
    CreatecompanyComponent,
    CreatevacancyComponent,
    UpdatecompanyComponent,
    UpdatevacancyComponent,
    VacanciesbycompanyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
