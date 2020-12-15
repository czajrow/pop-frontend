import { Component, OnInit } from '@angular/core';
import { ApplicationData } from './components/application/application.component';
import { AppsService } from './services/apps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-development-shelf',
  templateUrl: './development-shelf.component.html',
  styleUrls: ['./development-shelf.component.scss']
})
export class DevelopmentShelfComponent implements OnInit {

  public apps: ApplicationData[];

  constructor(
    private readonly _appsService: AppsService,
    private readonly _router: Router,
  ) {
    // this.apps = this._appsService.apps;
    this._appsService.apps$.subscribe(a => {
      this.apps = a;
    });
    this._appsService.getApps();
  }

  ngOnInit(): void {
  }

  onAddNewApp(): void {
    this._router.navigate(['application-details', 'new']);
  }

}
