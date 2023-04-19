import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../../models/models";
import {VacanciesService} from "../../services/vacancies.service";
import {DataserviceService} from "../../services/dataservice.service";

@Component({
  selector: 'app-vacanciesbycompany',
  templateUrl: './vacanciesbycompany.component.html',
  styleUrls: ['./vacanciesbycompany.component.css']
})
export class VacanciesbycompanyComponent implements OnInit {

  Vacancies: Vacancy[] = []


  constructor(private vacanciesService: VacanciesService, private dataService: DataserviceService) {
  }

  id: any;

  public getData(): any {
    this.id = this.dataService.getData();
  }

  ngOnInit(): void {
    this.getData()
    this.vacanciesService.getVacanciesByCompany(this.id).subscribe((data) => {
      console.log(data);
      this.Vacancies = data;
    })
  }


  deleteVacancy(itemId: number) {
    return this.vacanciesService.deleteVacancy(itemId).subscribe(
      () => {
        console.log('Item deleted successfully')
        this.reloadPage()
      });
  }

  reloadPage() {
    window.location.reload()
  }

  public sendData(id: number): void {
    const dataToSend = id;
    this.dataService.setData(dataToSend);
  }
}
