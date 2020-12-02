import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";

export interface ApplicationData {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
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

}
