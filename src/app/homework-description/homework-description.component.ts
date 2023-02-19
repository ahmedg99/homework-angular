import { Component, OnInit } from '@angular/core';
import { Infos } from '../core/model/Infos';

@Component({
  selector: 'app-homework-description',
  templateUrl: './homework-description.component.html',
  styleUrls: ['./homework-description.component.css']
})
export class HomeworkDescriptionComponent implements OnInit {
infos! : Infos ;
  constructor() { }

  ngOnInit(): void {
  }

}
