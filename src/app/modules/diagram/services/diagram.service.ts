import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const APPS_URL = 'http://localhost:8000/IManageApp/diagram/';

@Injectable({
  providedIn: 'root'
})

export class DiagramService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  public createDiagram(data): Observable<any> {
    const obiekt = JSON.parse(data)
    console.log(obiekt)
    return this.http.post(APPS_URL, obiekt).pipe(
      tap(response => {
        if (response) {
            alert("Successfully added diagram!")
        }
        else{
            alert("Cannot add diagram")
        }
      }),
    );
  }
  public getDiagrams(): Observable<any> {
    var url = APPS_URL;
    return this.http.get(url).pipe(
      tap(response => response),
    );
  }
  public getDiagram(id): Observable<any> {
    var url = APPS_URL + id;
    return this.http.get(url).pipe(
        tap(response => response),
      );
  }
  public updateDiagram(id, data): Observable<any> {
    const obiekt = JSON.parse(data)
    var url = "http://localhost:8888/IAppPersistance/diagram/" + id;
    console.log(obiekt)
    return this.http.put(url, obiekt).pipe(
      tap(response => {
        if (response) {
            alert("Successfully updated diagram!")
        }
        else{
            alert("Cannot update diagram")
        }
      }),
    );
  }
}
