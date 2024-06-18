import { Component, Input } from '@angular/core';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   @Input() employee: any;

   constructor(private cardService: CardsService){}

   display(){

   }
}
