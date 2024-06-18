import { Component, OnInit } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
   employees: any[] = [];

   constructor(private cardService: CardsService) {}

  ngOnInit(): void {
    
  }

}
