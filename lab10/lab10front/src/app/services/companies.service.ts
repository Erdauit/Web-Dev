import {Injectable} from '@angular/core';
import {Company} from "../models/models";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {
  BASE_URL = "http://127.0.0.1:8000/"

  constructor(private CompanyClient: HttpClient) {
  }

  /*CRUD ON COMPANY*/

  createCompany(company: { name: string, description: string, city: string, address: string }): Observable<Company[]> {
    return this.CompanyClient.post<Company[]>(`${this.BASE_URL}api/companies/`, company);
  }

  getCompanies(): Observable<Company[]> {
    return this.CompanyClient.get<Company[]>(`${this.BASE_URL}api/companies/`);
  }

  getCompany(id: any): Observable<Company> {
    return this.CompanyClient.get<Company>(`${this.BASE_URL}api/companies/${id}/`)
  }

  updateCompany(id: number, name: string, city: string, address: string, description: string): Observable<any> {
    const patchData = {name, city, address, description};
    return this.CompanyClient.put(`${this.BASE_URL}api/companies/${id}/`, patchData)
  }


  deleteCompany(id: number) {
    return this.CompanyClient.delete(`${this.BASE_URL}api/companies/${id}/`);
  }


}
