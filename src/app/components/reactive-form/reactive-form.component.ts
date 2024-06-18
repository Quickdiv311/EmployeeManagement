import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { CardsService } from '../cards/cards.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
    employeeForm!: FormGroup;
    editMode!:boolean;
    constructor(private cardServie: CardsService){}

   ngOnInit(): void {

     this.cardServie.editMode.subscribe((i) => this.editMode = i);
     let name = '';
     let skills = new FormArray([]);

     if(this.editMode)
     {
       console.log("employee");
     }

    this.employeeForm = new FormGroup({
      'name': new FormControl(name),
      'skills': skills
    })
  }

  get controls(){
    return (this.employeeForm.get('skills') as FormArray).controls;
  }

  addSkill(){
    return (this.employeeForm.get('skills') as FormArray).push(new FormControl(null));
  }

  removeSkill(i: number){
    return (this.employeeForm.get('skills') as FormArray).removeAt(i);
  }

  onSubmit(){
    this.cardServie.addData(this.employeeForm.value);
    this.employeeForm?.reset();
  }
}
