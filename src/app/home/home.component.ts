import { Component, OnInit } from '@angular/core';
import { IUnicorn } from '@models/unicorn';
import { StorageService } from '@services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isUnicornSaved: boolean = false;
  unicorns: IUnicorn[] = []

  constructor(private storage: StorageService) {
    this.isUnicornSaved = this.storage.checkIfData() ? true : false ;
    if(this.isUnicornSaved) {
      for(let i = 0; i < this.storage.getStorageLength(); i++){
        this.unicorns.push(this.storage.getData(`${i}`));
      }
    }
  }

  ngOnInit(): void {
  }

}
