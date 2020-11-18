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

  constructor(
    private readonly _clustersService: ClustersService,
    private formBuilder: FormBuilder,
    private readonly _router: Router,
  ) {
    this.computationUnits = this._clustersService.computationUnits;
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
  }

  onCreateNewCluster(): void {
    this._router.navigate(['computation-unit-details', 'new']);
    // this._clustersService.createCluster().subscribe(response => {
    //   console.log(response);
    // });
  }

  // onSubmit(customerData, event) {
  //   event.preventDefault();
  //   customerData.expectedCalculationsFinishTime = customerData.expectedCalculationsFinishTime + 'T00:00:00.000Z'
  //   this._clustersService.createCluster(customerData).subscribe(response => {
  //     alert("Udało się dodać CCluster")
  //     this.checkoutForm = this.formBuilder.group({
  //       name: '',
  //       cpuCoreCount: 1,
  //       cpuClockSpeedInGHz:  1.0,
  //       ramInGB: 1,
  //       gpuCoreClocksInGHz: 1.0,
  //       inUse: true,
  //       expectedCalculationsFinishTime: '',
  //       duringDeactivation: true
  //     });
  //     console.warn('Your order has been submitted', customerData);
  //   });
  //
  //
  // }

}
