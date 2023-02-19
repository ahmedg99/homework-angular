import { Component, OnInit } from '@angular/core';
import { Infos } from '../core/model/Infos';
import { Product } from '../core/model/Product';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
infos  ! : Infos ;
product !: Product ;
   constructor() { 
    this.infos = new Infos();
   }

  ngOnInit(): void {
  }

}
