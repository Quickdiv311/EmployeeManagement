import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

   employees = new Subject<any>();
   id = 0;
   editMode = new BehaviorSubject<boolean>(false);
   currentId = 0;
   employeeData:any[] = [];

  constructor() { }

  getEmployee(id: number){
    return this.employeeData.find(i => i.id === id);
  }

  passId(id: number){
    return this.currentId = id;
  }

  addData(data: any){
    data.id = ++this.id;
    this.employeeData.push(data);
    this.employees.next(this.employeeData);
  }

  updateData(newData: any){
    let employeeIndex = this.employeeData.findIndex(i => i.name == newData.name);
    this.employeeData[employeeIndex] = newData;
    this.employees.next(this.employeeData);
  }
}
