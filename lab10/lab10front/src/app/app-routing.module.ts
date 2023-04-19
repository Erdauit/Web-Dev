import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CompaniesComponent} from "./components/companies/companies.component";
import {VacanciesComponent} from "./components/vacancies/vacancies.component";
import {CreatecompanyComponent} from "./components/createcompany/createcompany.component";
import {CreatevacancyComponent} from "./components/createvacancy/createvacancy.component";
import {UpdatecompanyComponent} from "./components/updatecompany/updatecompany.component";
import {UpdatevacancyComponent} from "./components/updatevacancy/updatevacancy.component";
import {VacanciesbycompanyComponent} from "./components/vacanciesbycompany/vacanciesbycompany.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'vacancies', component: VacanciesComponent},
  {path: '', component: HomeComponent},
  {path: 'createcompany', component: CreatecompanyComponent},
  {path: 'createvacancy', component: CreatevacancyComponent},
  {path: 'updatecompany', component: UpdatecompanyComponent},
  {path: 'updatevacancy', component: UpdatevacancyComponent},
  {path: 'vacanciesbycompany', component: VacanciesbycompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
