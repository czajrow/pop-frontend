import { Injectable } from '@angular/core';
import { ComputationUnitData } from '../components/computation-unit/computation-unit.component';
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const CLUSTERS_URL = 'http://localhost:8000/imanageccluster';

@Injectable({
  providedIn: 'root'
})
export class ClustersService {

  public computationUnitsArray: ComputationUnitData[] = [];
  private computationUnitsSubject: BehaviorSubject<ComputationUnitData[]> = new BehaviorSubject<ComputationUnitData[]>([]);
  public computationUnits$: Observable<ComputationUnitData[]> = this.computationUnitsSubject.asObservable();
  public newUnitId: number = null;

  constructor(
    private readonly http: HttpClient,
  ) {
    this.getClusters();
  }

  public createCluster(customerData: ComputationUnitData): Observable<any> {
    const body = {
      name: customerData.name,
      cpuCoreCount: customerData.cpuCoreCount,
      cpuClockSpeedInGHz: customerData.cpuClockSpeedInGHz,
      ramInGB: customerData.ramInGB,
      gpuCoreClocksInGHz: customerData.gpuCoreClocksInGHz,
      duringDeactivation: customerData.duringDeactivation,
      cpuUtilization: customerData.cpuUtilization,
      gpuUtilization: customerData.gpuUtilization,
    } as Partial<ComputationUnitData>;

    return this.http.post(CLUSTERS_URL, body).pipe(
      tap(response => {
        this.computationUnitsArray.push(response);
        this.newUnitId = this.computationUnitsArray.length - 1;
        this.computationUnitsSubject.next(this.computationUnitsArray);
      }),
    );
  }

  public getClusters(): void {
    this.http.get(CLUSTERS_URL).subscribe(a => {
      this.computationUnitsArray = a as ComputationUnitData[];
      this.computationUnitsSubject.next(this.computationUnitsArray);
    });
  }

  public getCluster(id): Observable<ComputationUnitData> {
    const url = CLUSTERS_URL + '/' + id?.toString();
    return this.http.get(url).pipe(
      map(unit => unit as ComputationUnitData),
    );
  }
}
