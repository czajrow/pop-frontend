import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClustersService } from '../../services/clusters.service';

export interface ComputationUnitData {
  id: number;
  name: string;
  cpuCoreCount: number;
  cpuClockSpeedInGHz: number;
  ramInGB: number;
  gpuCoreClocksInGHz: number;
  cpuUtilization: number;
  gpuUtilization: number;
  duringDeactivation: boolean;
}

@Component({
  selector: 'app-computation-unit',
  templateUrl: './computation-unit.component.html',
  styleUrls: ['./computation-unit.component.scss']
})
export class ComputationUnitComponent implements OnInit {

  @Input() computationUnit: ComputationUnitData;
  @Input() highlight = false;

  constructor(
    private readonly _router: Router,
    private readonly _clustersService: ClustersService,
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._router.navigate(['computation-unit-details', this.computationUnit?.id]);
  }

  onDelete(event: Event): void {
    event.stopPropagation();
    this._clustersService.deleteCluster(this.computationUnit.id);
    // this._router.navigate(['computation-unit-shelf']);
  }

}
