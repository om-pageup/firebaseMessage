import { Component } from '@angular/core';
import { MessagingService } from '../service/messaging.service';
// import { PostMessage } from './model/Post.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostMessage } from './model/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'Message for you';
  public message = 'Welcome User';
  public token: string[] = ["dDsVf57FLZCX7ZCvJKCECN:APA91bFq6AzDrZCZJADfd9TAnMMBwM9rKIW-3ONE21uJplmiTzRVZirQ1Xj82ByrS66H5loT5uIQl5zE-tTACXvpPSPt6wfgmeM0ONJpoFXMLOfeQkA9vETxvu-lArYbFS4S29WlCa8s"];

  public isadmin: boolean = false;

  public satyamToken = "dDsVf57FLZCX7ZCvJKCECN:APA91bFq6AzDrZCZJADfd9TAnMMBwM9rKIW-3ONE21uJplmiTzRVZirQ1Xj82ByrS66H5loT5uIQl5zE-tTACXvpPSPt6wfgmeM0ONJpoFXMLOfeQkA9vETxvu-lArYbFS4S29WlCa8s"


  constructor(private _message: MessagingService,  private _httpClient: HttpClient){
    this._message.requestPermission();
    this._message.listen();
  }

  ngOnInit(): void {
    // localStorage.setItem("user", "admin");
    // this.getAllTOken();
    // this.getToken();
  }
  
  public sendNotification(){

    const url: string = "https://fcm.googleapis.com/fcm/send";

    const data: PostMessage = {
      notification: {
        title: this.title,
        body: this.message
      },

      to: this.satyamToken
    }

    const myHeader = new HttpHeaders({
      'Authorization': 'key=AAAA49GtemM:APA91bEmmWnrXE5K5sRnwtxkKFKhpVavEEFNHuP1Li0NndRJlOpVXutJeVToDGw-g5SXfteI2PIlw2lF_akkhllWqSNxf7KQXidpNgN87LlY1FvQcIoe_qcSsxXBU3BL-O3-2iO7ncHS'
    })

    this._httpClient.post(url, data, {headers: myHeader}).subscribe({
      next: (res) =>{
        console.log(res);
      },

      error: (err) =>{
        console.log(err);
      }
    })
  }


  private getAllTOken(){
    this._httpClient.get('url').subscribe({
      next: (res: any) =>{
        console.log(res);
      },

      error: (err) =>{
        console.log(err);
      }
    })
  }

  private getToken(){

    if(localStorage.getItem("user")){
      this.isadmin = true;
      // console.log(true);
    }
    else{
      this.isadmin = false;
    }
  }
}
