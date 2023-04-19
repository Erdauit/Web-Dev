import {Component} from '@angular/core';
import {MdbModalRef} from 'mdb-angular-ui-kit/modal';
import {CompaniesService} from "../../services/companies.service";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  id: number | any;
  newName!: string;
  newDescription!: string;

  newCity!: string;
  newAddress!: string;

  constructor(public modalRef: MdbModalRef<ModalComponent>, private companyService: CompaniesService) {

  }

  updateCompany() {
    this.companyService.updateCompany(this.id, this.newName, this.newCity, this.newAddress, this.newDescription).subscribe(
      response => {
        console.log(response), this.reloadPage()
      },
      error => console.log(error),
    );
  }

  reloadPage() {
    window.location.reload()
  }
}
