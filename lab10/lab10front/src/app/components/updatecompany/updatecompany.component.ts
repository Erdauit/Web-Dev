import {Component, OnInit} from '@angular/core';
import {DataserviceService} from "../../services/dataservice.service";
import {CompaniesService} from "../../services/companies.service";

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {


  constructor(private dataService: DataserviceService, private companyService: CompaniesService) {

  }

  id: any;
  newName: any;
  newDescription: any;
  newCity: any;
  newAddress: any;

  public getData(): any {
    this.id = this.dataService.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  updateCompany() {
    this.companyService.updateCompany(this.id, this.newName, this.newCity, this.newAddress, this.newDescription).subscribe(
      response => {
        console.log(response), this.reloadPage()
      },
      error => console.log(error),
    )
  }

  reloadPage() {
    window.location.reload()
  }

}
