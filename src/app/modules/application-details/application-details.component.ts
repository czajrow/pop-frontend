import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppsService } from '../development-shelf/services/apps.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit {

  items;
  checkoutForm: FormGroup;

  public _id: string;
  public readonly _isNew: boolean;


  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _appsService: AppsService,
    private readonly _formBuilder: FormBuilder,
  ) {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this._id = id;
      this._isNew = this._id === 'new';
    }

    this.checkoutForm = this._formBuilder.group({
      version: [1, Validators.required],
      name: ['', Validators.required],
      executionDiagram: ['', Validators.required],
      price: [1, Validators.required],
      iconURL: ['', Validators.required],
      inputDataFormatDescription: ['', Validators.required],
      outputDataFormatDescription: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData, event): void {
    event.preventDefault();
    customerData.expectedCalculationsFinishTime = customerData.expectedCalculationsFinishTime + 'T00:00:00.000Z';
    this._appsService.createApp(customerData).subscribe(
      response => {
        this._router.navigate(['development-shelf']);
      },
      error => {
        console.log(error);
        alert(error?.error?.detail || 'Unknown error appeared...');
      }
    );
  }

}
