import { Injectable } from '@angular/core';
import { ComputationUnitData } from '../components/computation-unit/computation-unit.component';
import { tap } from 'rxjs/operators';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

const CLUSTERS_URL = 'http://localhost:8000/imanageccluster';

@Injectable({
  providedIn: 'root'
})
export class ClustersService {

  public computationUnits: ComputationUnitData[] = [];
  public newUnitId: number = null;

  constructor(
    private readonly http: HttpClient,
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

    return this.http.post(CLUSTERS_URL, body).pipe(
      tap(response => {
        this.computationUnits.push({
          id: response?.id.toString(),
          name: response?.name,
        });
        this.newUnitId = this.computationUnits.length - 1;
      }),
    );
  }

  public getCluster(id): Observable<any> {
    const url = CLUSTERS_URL + '/' + id?.toString();
    return this.http.get(url).pipe(
      tap(response => response),
    )
  }
}
