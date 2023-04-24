import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private role : String = "ANONYMOUS";

  constructor() { }

  sendRole(){
    return this.role;
  }
}
