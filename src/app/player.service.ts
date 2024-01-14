import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
 
  private baseURL = "http://localhost:8080/v1/player"

  // Subject para notificar cambios
  private playerListUpdated = new Subject<void>();
  
  constructor(private httpClient : HttpClient) { }

  getPlayerList():Observable<Player[]>{
    return this.httpClient.get<Player[]>(this.baseURL+"/all");
  }
  getPlayerById(id:number) {
    return this.httpClient.get<Player>(this.baseURL + "/" + id);
  }
  switch(id: number) : Observable<any>{
    return this.httpClient.get(this.baseURL + "/switch/" + id);
  }
  getPlayerListUpdated(): Observable<void> {
    return this.playerListUpdated.asObservable();
  }

  // Método para notificar cambios
  notifyPlayerListUpdated() {
    this.playerListUpdated.next();
  }
}
