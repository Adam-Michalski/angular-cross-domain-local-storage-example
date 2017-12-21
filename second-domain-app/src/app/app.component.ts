import { Component } from '@angular/core';

declare let CrossStorageHub: any;
declare let CrossStorageClient: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  localStorageItem: string;
  crossDomainItem: string;
  storage: any;

  constructor() {
    CrossStorageHub.init([
      { origin: /localhost:4200$/, allow: ['get', 'set', 'del', 'getKeys', 'clear'] },
      { origin: /localhost:3000$/, allow: ['get', 'set', 'del', 'getKeys', 'clear'] }
    ]);
    this.storage = new CrossStorageClient('http://localhost:3000/hub.html');

  }

  getFromLocalStorage() {
    this.localStorageItem = localStorage.getItem('item');
    this.crossDomainItem = this.storage.onConnect().then(() => {
      console.log(this.storage.get('cross-domain-item'));
      return this.storage.get('cross-domain-item');
    });
  }

  addToLocalStorage() {
    this.storage.onConnect().then(() => {
      return this.storage.set('cross-domain-item', 'Second application cross domain item');
    });
    localStorage.setItem('item', 'Second application item');
  }
}
