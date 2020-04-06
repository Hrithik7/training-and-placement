import { Injectable, Inject } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public data:any=[];

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService) {
     
  }

  saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
   }

   getFromLocal(key): void {
    console.log('recieved= key:' + key);
    this.data= this.storage.get(key);
    console.log(this.data);
    return this.data;
   }
}
