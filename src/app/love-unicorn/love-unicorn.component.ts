import { Component, OnInit } from '@angular/core';
import { IUnicorn } from '@models/unicorn';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '@services/storage.service';
import { avgHex } from '@app/utils/mixHex';

export interface IUnicornsOptions {
  name: string,
  value: string
}

@Component({
  selector: 'app-love-unicorn',
  templateUrl: './love-unicorn.component.html',
  styleUrls: ['./love-unicorn.component.scss']
})
export class LoveUnicornComponent implements OnInit {
  unicorns: IUnicorn[] = [];
  unicornsOptions: IUnicornsOptions[] = [];
  babyUnicorn: IUnicorn = {
    id: 0,
    name: '',
    color: '',
    gender: '',
    age: 0
  }
  isBabyUnicorn: boolean = false;
  isGenderError: boolean = false;
  myForm: FormGroup = this.fb.group({});

  constructor(private storage: StorageService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      parentUnicorn1: ['', Validators.required],
      parentUnicorn2: ['', Validators.required]
    });
    this.unicorns = this.storage.getAllData();
  }

  onSubmit(form: FormGroup): void {
    const unicorn1 = form.value.parentUnicorn1;
    const unicorn2 = form.value.parentUnicorn2;
    const gender = Math.floor(Math.random() * 2) === 1 ? 'male' : 'female';
    console.log(this.canGiveBirth(unicorn1, unicorn2))
    if(this.canGiveBirth(unicorn1, unicorn2)) {
      this.babyUnicorn = {
        id: this.storage.getStorageLength(),
        name: unicorn1.name.concat(' ', unicorn2.name),
        color: avgHex(unicorn1.color, unicorn2.color),
        gender: gender,
        age: 0
      }
      this.isBabyUnicorn = true;
      console.log(this.babyUnicorn)
    } else {
      this.isGenderError = true;
    }
  }

  canGiveBirth(unicorn1: IUnicorn, unicorn2: IUnicorn): boolean {
    if(unicorn1.gender === 'male' && unicorn2.gender === 'female'){
      return true;
    } else if (unicorn1.gender === 'female' && unicorn2.gender === 'male'){
      return true;
    } else {
      return false;
    }
  }

  saveBabyUnicorn(babyUnicorn: IUnicorn): void {
    this.storage.saveData(`${babyUnicorn.id}`, babyUnicorn)
  }
}
