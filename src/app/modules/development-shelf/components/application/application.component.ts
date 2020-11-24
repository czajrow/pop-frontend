import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

export interface ApplicationData {
  version: number;
  name: string;
  executionDiagram: string;
  price: string;
  iconURL: string;
  inputDataFormatDescription: string;
  outputDataFormatDescription: string;
  id: number;
}


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {

  @Input() app: ApplicationData;


  constructor(
    private readonly _router: Router,
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._router.navigate(['application-details', this.app?.id]);
  }

}
