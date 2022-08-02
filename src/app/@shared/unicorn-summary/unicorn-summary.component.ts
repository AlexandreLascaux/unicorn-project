import { Component, OnInit, Input } from '@angular/core';
import { IUnicorn } from '@app/_models/unicorn';

@Component({
  selector: 'app-unicorn-summary',
  templateUrl: './unicorn-summary.component.html',
  styleUrls: ['./unicorn-summary.component.scss']
})
export class UnicornSummaryComponent implements OnInit {
  @Input() unicorn: IUnicorn = {
    id: 0,
    name: '',
    color: '',
    gender: '',
    age: 0
  }
  genderFirstUpperCase: string = '';
  nameFirstUpperCase: string = '';

  constructor() { }

  ngOnInit(): void {
    this.genderFirstUpperCase = this.unicorn.gender.charAt(0).toUpperCase() + this.unicorn.gender.slice(1);
    this.nameFirstUpperCase = this.unicorn.name.charAt(0).toUpperCase() + this.unicorn.name.slice(1);
  }

}
