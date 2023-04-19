import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private data: any;

  constructor() {
  }

  public getData(): any {
    return this.data;
  }

  public setData(data: any): void {
    this.data = data;
  }
}
