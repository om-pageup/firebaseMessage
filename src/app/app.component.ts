import { Component } from '@angular/core';
// import { MessagingService } from '../service/messaging.service';

import { environment } from "../environment/environment";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { MessagingService } from '../service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = '';
  public message = '';

  constructor(private _message: MessagingService){
    this._message.requestPermission();
    this._message.listen();

    
  }

  ngOnInit(): void {
    // this.requestPermission();
    // this.listen();
  }

  public sendNotification(){
    
  }

  // requestPermission() {
  //   const messaging = getMessaging();
  //   getToken(messaging,
  //     { vapidKey: environment.firebase.vapidKey }).then(
  //       (currentToken) => {
  //         if (currentToken) {
  //           console.log("Hurraaa!!! we got the token.....");
  //           console.log(currentToken);
  //         } else {
  //           console.log('No registration token available. Request permission to generate one.');
  //         }
  //       }).catch((err) => {
  //         console.log('An error occurred while retrieving token. ', err);
  //       });
  // }
  // listen() {
  //   const messaging = getMessaging();
  //   onMessage(messaging, (payload) => {
  //     console.log('Message received. ', payload);
  //     this.message = payload;
  //   });
  // }
}
