import {Component} from '@angular/core';
import {CompaniesService} from "../../services/companies.service";

@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreatecompanyComponent {
  company = {
    name: "",
    city: "",
    address: "",
    description: "",
  }

  constructor(private companyService: CompaniesService) {
  }

  createCompany() {
    this.companyService.createCompany(this.company).subscribe((response: any) => {
      console.log(response);
    })
  }
}
