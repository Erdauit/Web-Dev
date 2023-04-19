import {Component} from '@angular/core';
import {VacanciesService} from "../../services/vacancies.service";
import {Vacancy} from "../../models/models";

@Component({
  selector: 'app-createvacancy',
  templateUrl: './createvacancy.component.html',
  styleUrls: ['./createvacancy.component.css']
})
export class CreatevacancyComponent {
  newVacancy: { name: string; description: string; company: { address: string; city: string; name: string; description: string; id: number }; salary: number } = {
    name: '',
    description: '',
    salary: 0,
    company: {
      id: 0,
      name: '',
      description: '',
      city: '',
      address: ''
    }
  };

  constructor(private vacancyService: VacanciesService) {
  }

  onSubmit() {
    console.log(this.newVacancy)
    this.vacancyService.createVacancy(this.newVacancy).subscribe((response) => {
      console.log(response)
    });
  }

}
