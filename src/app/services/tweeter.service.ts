import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TweeterService {
  public $tweeterData: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private httpClient: HttpClient) {}

  getTweeterData(): Observable<any> {
    return this.httpClient.get('/api/feeds');
  }

  sendTweeterData(tweetMessage: any) {
    return this.httpClient.post('/api/feed', {
      tweetMessage,
    });
  }

  putTweeterData(id: number, tweetMessage: any) {
    return this.httpClient.put('/api/feeds/${id}', {
      tweetMessage,
    });
  }

  deleteTweeterData(id: number) {
    return this.httpClient.delete(`/api/feeds/${id}`);
  }
}
