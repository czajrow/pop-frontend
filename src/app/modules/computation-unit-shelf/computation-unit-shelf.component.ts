import { Component, OnInit } from '@angular/core';
import { ComputationUnitData } from './components/computation-unit/computation-unit.component';
import { ClustersService } from './services/clusters.service';

@Component({
  selector: 'app-computation-unit-shelf',
  templateUrl: './computation-unit-shelf.component.html',
  styleUrls: ['./computation-unit-shelf.component.scss']
})
export class ComputationUnitShelfComponent implements OnInit {

  public computationUnits: ComputationUnitData[];

  constructor(
    private readonly _clustersService: ClustersService,
  ) {
    this.computationUnits = this._clustersService.computationUnits;
  }

  ngOnInit(): void {
  }

  onCreateNewCluster(): void {
    this._clustersService.createCluster().subscribe(response => {
      console.log(response);
    });
  }

}
