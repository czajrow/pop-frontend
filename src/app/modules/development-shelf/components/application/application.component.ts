import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppsService } from '../../services/apps.service';

export interface ApplicationData {
  // version: number;
  // name: string;
  // executionDiagram: string;
  // price: string;
  // iconURL: string;
  // inputDataFormatDescription: string;
  // outputDataFormatDescription: string;
  // id: number;
  id: number;
  version: number;
  name: string;
  iconURL: string;
  applicationDiagramId: number;
  price: number;
  inputDataFormatDescription: string;
  outputDataFormatDescription: string;
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
    private readonly _appsService: AppsService,
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._router.navigate(['application-details', this.app?.id]);
  }

  onDelete(event: Event): void {
    event.stopPropagation();
    this._appsService.deleteApp(this.app?.id);
  }

}
