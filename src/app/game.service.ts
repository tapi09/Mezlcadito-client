import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Game } from './game';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  
  private baseURL = "http://localhost:8080/v1/game"

  constructor(private httpClient : HttpClient) { }
  
  createGame(): Observable<any>{
   return this.httpClient.get<Game>(this.baseURL);
  }

}
