import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClustersService } from "../computation-unit-shelf/services/clusters.service";

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

    this.checkoutForm = this._formBuilder.group({
      name: ['', Validators.required],
      cpuCoreCount: [1, Validators.required],
      cpuClockSpeedInGHz:  [1.0, Validators.required],
      ramInGB: [1, Validators.required],
      gpuCoreClocksInGHz: [1.0, Validators.required],
      inUse: [true, Validators.required],
      expectedCalculationsFinishTime: ['', Validators.required],
      duringDeactivation: [true, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData, event): void {
    event.preventDefault();
    customerData.expectedCalculationsFinishTime = customerData.expectedCalculationsFinishTime + 'T00:00:00.000Z';
    this._clustersService.createCluster(customerData).subscribe(response => {
      alert('Udało się dodać CCluster');
      console.warn('Your order has been submitted', customerData);
      this._router.navigate(['computation-unit-shelf']);
    });
  }

}
