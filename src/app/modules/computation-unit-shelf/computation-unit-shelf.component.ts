import { Component, OnInit } from '@angular/core';
import { ComputationUnitData } from './components/computation-unit/computation-unit.component';

@Component({
  selector: 'app-computation-unit-shelf',
  templateUrl: './computation-unit-shelf.component.html',
  styleUrls: ['./computation-unit-shelf.component.scss']
})
export class ComputationUnitShelfComponent implements OnInit {

  public computationUnits: ComputationUnitData[];

  constructor() {
    this.computationUnits = this.generateComputationUnits();
  }

  ngOnInit(): void {
  }

  private generateComputationUnits(): ComputationUnitData[] {
    const result: ComputationUnitData[] = [];
    for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      result.push({
        id: `${i}`,
        name: `Computation Unit ${i}`,
      });
    }
    return result;
  }

}
