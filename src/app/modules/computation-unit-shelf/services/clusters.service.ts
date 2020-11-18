import { Inject, Injectable } from '@angular/core';
import { ComputationUnitData } from '../components/computation-unit/computation-unit.component';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const CLUSTERS_URL = 'http://localhost:8000/imanageccluster';

@Injectable({
  providedIn: 'root'
})
export class ClustersService {

  public computationUnits: ComputationUnitData[] = [];

  constructor(
    @Inject(HttpClient) private readonly http: HttpClient,
  ) {
  }

  public createCluster(customerData): Observable<any> {
    const body = {
      name: customerData.name,
      cpuCoreCount: customerData.cpuCoreCount,
      cpuClockSpeedInGHz: customerData.cpuClockSpeedInGHz,
      ramInGB: customerData.ramInGB,
      gpuCoreClocksInGHz: customerData.gpuCoreClocksInGHz,
      inUse: customerData.inUse,
      expectedCalculationsFinishTime: customerData.expectedCalculationsFinishTime,
      duringDeactivation: customerData.duringDeactivation
    };
    const options = {
      body,
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      }),
    };
    // return this.http.post(CLUSTERS_URL, body, options).pipe(
    //   tap(response => console.log(response)),
    // );

    return this.http.request('POST', CLUSTERS_URL, options).pipe(
      tap(response => {
        this.computationUnits.push({
          id: response?.id,
          name: response?.name,
        });
      }),
    );
  }

  // private generateComputationUnits(): ComputationUnitData[] {
  //   const result: ComputationUnitData[] = [];
  //   for (const i of []) {
  //     result.push({
  //       id: `${i}`,
  //       name: `Computation Unit ${i}`,
  //     });
  //   }
  //   return result;
  // }
}
