import { Injectable } from '@angular/core';
import { IUnicorn } from '@models/unicorn';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  saveData(key: string, value: IUnicorn): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getData(key: string): IUnicorn {
    return JSON.parse(localStorage.getItem(key) ?? '{}');
  }

  checkIfData(): boolean {
    return localStorage.length !== 0 ? true : false;
  }

  getStorageLength(): number {
    return localStorage.length;
  }

  getAllData(): IUnicorn[] {
    let unicorns: IUnicorn[] = [];
    for(let i = 0; i < localStorage.length; i++){
      unicorns.push(this.getData(`${i}`));
    }

    return unicorns;
  }
}
