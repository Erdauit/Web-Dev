import {Component, OnInit} from '@angular/core';
import {Vacancy} from "../../models/models";
import {DataserviceService} from "../../services/dataservice.service";
import {VacanciesService} from "../../services/vacancies.service";

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {

  Vacancies: Vacancy[] = []

  constructor(private vacanciesService: VacanciesService, private dataService: DataserviceService) {
  }

  ngOnInit(): void {
    this.vacanciesService.getVacancies().subscribe((data) => {
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

  getTopTen() {
    return this.vacanciesService.getTopTenVacancies().subscribe((data) => {
      this.Vacancies = data;
    })
  }


  reloadPage() {
    window.location.reload()
  }

  public sendData(id: number): void {
    const dataToSend = id;
    this.dataService.setData(dataToSend);
  }


}
