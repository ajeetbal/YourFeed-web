import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  isLoggedIn = new EventEmitter<Boolean>();
  constructor() { }
}
