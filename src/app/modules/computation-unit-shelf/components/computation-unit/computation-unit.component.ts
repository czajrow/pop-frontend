import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface ComputationUnitData {
  id: string;
  name: string;
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
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._router.navigate(['computation-unit-details', this.computationUnit?.id]);
  }

}
