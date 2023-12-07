import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  read(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  update(key: string, value: any): void {
    if (localStorage.getItem(key) !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
