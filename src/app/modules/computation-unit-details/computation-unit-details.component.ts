import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-computation-unit-details',
  templateUrl: './computation-unit-details.component.html',
  styleUrls: ['./computation-unit-details.component.scss']
})
export class ComputationUnitDetailsComponent implements OnInit {

  public _id: string;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this._id = id;
    }
  }

  ngOnInit(): void {
  }

}
