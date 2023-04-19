import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Vacancy} from "../models/models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VacanciesService {
  BASE_URL = 'http://127.0.0.1:8000/'

  constructor(private VacancyService: HttpClient) {
  }

  /* CRUD ON VACANCIES */

  createVacancy(vacancy: { name: string; description: string; company: { address: string; city: string; name: string; description: string; id: number }; salary: number }): Observable<Vacancy> {
    return this.VacancyService.post<Vacancy>(`${this.BASE_URL}api/vacancies/`, vacancy)
  }

  getVacancies(): Observable<Vacancy[]> {
    return this.VacancyService.get<Vacancy[]>(`${this.BASE_URL}api/vacancies/`)
  }

  updateVacancy() {

  }

  deleteVacancy(id: number) {
    return this.VacancyService.delete(`${this.BASE_URL}api/vacancies/${id}/`)
  }

  getVacanciesByCompany(id: number): Observable<Vacancy[]> {
    return this.VacancyService.get<Vacancy[]>(`${this.BASE_URL}api/companies/${id}/vacancies/`)
  }

  getTopTenVacancies(): Observable<Vacancy[]> {
    return this.VacancyService.get<Vacancy[]>(`${this.BASE_URL}api/vacancies/top_ten/`)
  }
}
