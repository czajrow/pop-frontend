import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { ClustersService } from "../computation-unit-shelf/services/clusters.service";

@Component({
  selector: 'app-computation-unit-details',
  templateUrl: './computation-unit-details.component.html',
  styleUrls: ['./computation-unit-details.component.scss']
})
export class ComputationUnitDetailsComponent implements OnInit {

  items;
  checkoutForm;

  public _id: string;
  public readonly _isNew: boolean;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _formBuilder: FormBuilder,
    private readonly _clustersService: ClustersService,
  ) {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this._id = id;
      this._isNew = this._id === 'new';
    }

    this.checkoutForm = this._formBuilder.group({
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
  }

  onSubmit(customerData, event): void {
    event.preventDefault();
    customerData.expectedCalculationsFinishTime = customerData.expectedCalculationsFinishTime + 'T00:00:00.000Z';
    this._clustersService.createCluster(customerData).subscribe(response => {
      alert('Udało się dodać CCluster');
      this.checkoutForm = this._formBuilder.group({
        name: '',
        cpuCoreCount: 1,
        cpuClockSpeedInGHz:  1.0,
        ramInGB: 1,
        gpuCoreClocksInGHz: 1.0,
        inUse: true,
        expectedCalculationsFinishTime: '',
        duringDeactivation: true
      });
      console.warn('Your order has been submitted', customerData);
    });


  }

}
