import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClustersService } from '../computation-unit-shelf/services/clusters.service';
import { ComputationUnitData } from '../computation-unit-shelf/components/computation-unit/computation-unit.component';

@Component({
  selector: 'app-computation-unit-details',
  templateUrl: './computation-unit-details.component.html',
  styleUrls: ['./computation-unit-details.component.scss']
})
export class ComputationUnitDetailsComponent implements OnInit {

  items;
  checkoutForm: FormGroup;

  public _id: string;
  public readonly _isNew: boolean;
  public _cluster: ComputationUnitData;
  public _editMode = false;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _formBuilder: FormBuilder,
    private readonly _clustersService: ClustersService,
    private readonly _router: Router,
  ) {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this._id = id;
      this._isNew = this._id === 'new';
    }

    this._clustersService.getCluster(+this._id).subscribe(cluster => {
      this._cluster = cluster;

      if (this._isNew) {
        this.checkoutForm = this._formBuilder.group({
          name: ['', Validators.required],
          cpuCoreCount: [1, Validators.required],
          cpuClockSpeedInGHz: [1.0, Validators.required],
          ramInGB: [1, Validators.required],
          gpuCoreClocksInGHz: [1.0, Validators.required],
          // inUse: [true, Validators.required],
          // expectedCalculationsFinishTime: ['', Validators.required],
          cpuUtilization: [1, Validators.required],
          gpuUtilization: [1, Validators.required],
          duringDeactivation: [true, Validators.required],
        });
      } else {
        this.checkoutForm = this._formBuilder.group({
          name: [this._cluster.name, Validators.required],
          cpuCoreCount: [this._cluster.cpuCoreCount, Validators.required],
          cpuClockSpeedInGHz: [this._cluster.cpuClockSpeedInGHz, Validators.required],
          ramInGB: [this._cluster.ramInGB, Validators.required],
          gpuCoreClocksInGHz: [this._cluster.gpuCoreClocksInGHz, Validators.required],
          cpuUtilization: [this._cluster.cpuUtilization, Validators.required],
          gpuUtilization: [this._cluster.gpuUtilization, Validators.required],
          duringDeactivation: [this._cluster.duringDeactivation, Validators.required],
        });
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData, event): void {
    event.preventDefault();
    customerData.expectedCalculationsFinishTime = customerData.expectedCalculationsFinishTime + 'T00:00:00.000Z';

    if (this._isNew) {
      this._clustersService.createCluster(customerData).subscribe(
        response => {
          alert("Dodano CCluster!");
          this._router.navigate(['computation-unit-shelf']);
        },
        error => {
          alert(error?.error?.detail || 'Unknown error appeared...');
        }
      );
    } else {
      this._clustersService.updateCluster(+this._id, customerData).subscribe(
        response => {
          alert('Zaktualizowano CCluster!');
          this._router.navigate(['computation-unit-shelf']);
        },
        error => {
          alert(error?.error?.detail || 'Unknown error appeared...');
        }
      );
    }

  }

}
