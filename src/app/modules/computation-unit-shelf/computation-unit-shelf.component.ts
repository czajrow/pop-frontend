import { Component, OnInit } from '@angular/core';
import { ComputationUnitData } from './components/computation-unit/computation-unit.component';
import { ClustersService } from './services/clusters.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-computation-unit-shelf',
  templateUrl: './computation-unit-shelf.component.html',
  styleUrls: ['./computation-unit-shelf.component.scss']
})
export class ComputationUnitShelfComponent implements OnInit {
  items;
  checkoutForm;

  public computationUnits: ComputationUnitData[];
  public new: number = null;

  constructor(
    private readonly _clustersService: ClustersService,
    private formBuilder: FormBuilder,
    private readonly _router: Router,
  ) {
    this.computationUnits = this._clustersService.computationUnitsArray;
    this.checkoutForm = this.formBuilder.group({
      name: '',
      cpuCoreCount: 1,
      cpuClockSpeedInGHz:  1.0,
      ramInGB: 1,
      gpuCoreClocksInGHz: 1.0,
      inUse: true,
      expectedCalculationsFinishTime: '',
      duringDeactivation: true
    });
  }

  ngOnInit(): void {
    this.new = this._clustersService.newUnitId;
    this._clustersService.newUnitId = null;
  }

  onCreateNewCluster(): void {
    this._router.navigate(['computation-unit-details', 'new']);
  }

}
