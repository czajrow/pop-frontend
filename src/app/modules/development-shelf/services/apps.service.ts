import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApplicationData } from '../components/application/application.component';

const APPS_URL = 'http://localhost:8000/IManageApp/';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  private appsArray: ApplicationData[] = [];
  private appsSubject: BehaviorSubject<ApplicationData[]> = new BehaviorSubject<ApplicationData[]>([]);
  public apps$: Observable<ApplicationData[]> = this.appsSubject.asObservable();

  constructor(
    private readonly http: HttpClient,
  ) {
    this.getApps();
  }

  public createApp(data): Observable<any> {
    const body = {
      version: data.version,
      name: data.name,
      applicationDiagramId: data.executionDiagram,
      price: data.price,
      iconURL: data.iconURL,
      inputDataFormatDescription: data.inputDataFormatDescription,
      outputDataFormatDescription: data.outputDataFormatDescription,
    };

    return this.http.post(APPS_URL, body).pipe(
      tap(response => {
        if (response.detail) {
          //
        } else {
          this.appsArray.push({
            version: response.version,
            name: response.name,
            applicationDiagramId: response.executionDiagram,
            price: response.price,
            iconURL: response.iconURL,
            inputDataFormatDescription: response.inputDataFormatDescription,
            outputDataFormatDescription: response.outputDataFormatDescription,
            id: response.id,
          });
          this.appsSubject.next(this.appsArray);
        }
      }),
    );
  }

  public getApps(): void {
    this.http.get(APPS_URL).subscribe(a => {
      this.appsArray = a as ApplicationData[];
      this.appsSubject.next(this.appsArray);
    });
  }

  public getApp(id): Observable<any> {
    const url = APPS_URL + '/' + id?.toString();
    return this.http.get(url).pipe(
      tap(response => response),
    );
  }

  public deleteApp(id: number): void {
    const url = APPS_URL + '/' + id?.toString();
    this.http.delete(url).subscribe(
      a => {
        console.log(a);
        this.getApps();
      },
      error => {
        console.error(error);
      }
    );
  }
}
