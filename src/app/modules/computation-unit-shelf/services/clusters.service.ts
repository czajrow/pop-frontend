import { Inject, Injectable } from '@angular/core';
import { ComputationUnitData } from '../components/computation-unit/computation-unit.component';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const CLUSTERS_URL = 'http://localhost:8084';

@Injectable({
  providedIn: 'root'
})
export class ClustersService {

  public computationUnits: ComputationUnitData[] = [];

  constructor(
    @Inject(HttpClient) private readonly http: HttpClient,
  ) {
  }

  public createCluster(): Observable<any> {
    const body = {
      name: 'Test',
      cpuCoreCount: 1,
      cpuClockSpeedInGHz: 0.1,
      ramInGB: 1,
      gpuCoreClocksInGHz: 1.0,
      inUse: true,
      expectedCalculationsFinishTime: '2021-11-16T22:32:36.977Z',
      duringDeactivation: true
    };
    const options = {
      body,
      responseType: 'blob' as 'json',
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

    return this.http.request('POST', CLUSTERS_URL, options)
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
