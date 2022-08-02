import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '@services/storage.service';
import { IUnicorn } from '@models/unicorn';

export interface IGenderOptions {
  name: string,
  value: string
}

@Component({
  selector: 'app-add-unicorn',
  templateUrl: './add-unicorn.component.html',
  styleUrls: ['./add-unicorn.component.scss']
})
export class AddUnicornComponent implements OnInit {
  myForm: FormGroup = this.fb.group({});
  genderOptions: IGenderOptions[] = [
    {
      name: 'Male',
      value: 'male',
    },
    {
      name: 'Female',
      value: 'female',
    },
    {
      name: 'Other',
      value: 'other',
    },
  ];


  constructor(private fb: FormBuilder, private storage: StorageService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      color: ['', [Validators.required, Validators.pattern('^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$')]],
      gender: ['', Validators.required],
      age: [0, Validators.required]
    })
  }

  onSubmit(form: FormGroup): void {
    if(form.valid) {
      let unicorn: IUnicorn = {
        id: this.storage.getStorageLength(),
        name: form.value.name,
        color: form.value.color,
        gender: form.value.gender,
        age: form.value.age
      }
      this.storage.saveData(`${unicorn.id}`, unicorn)
    }

  }

}
