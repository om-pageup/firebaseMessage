import { Injectable, OnInit } from '@angular/core';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { environment } from '../environment/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class MessagingService implements OnInit {

    public currentMessage = new BehaviorSubject(null);


    message: any = null;
    ngOnInit(): void {
        // this.requestPermission();
        // this.listen();
        // const messaging = firebase.
        // messaging.
    }
    public requestPermission() {
        const messaging = getMessaging();
        getToken(messaging,
            { vapidKey: environment.firebase.vapidKey }).then(
                (currentToken) => {
                    if (currentToken) {
                        console.log("Hurraaa!!! we got the token.....");
                        console.log(currentToken);
                    } else {
                        console.log('No registration token available. Request permission to generate one.');
                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                });
    }

    public listen() {
        const messaging = getMessaging();
        onMessage(messaging, (payload) => {
            console.log('Message received. ', payload);
            this.message = payload;
            
            this.currentMessage.next(this.message);
        });
    }
}

