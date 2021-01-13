import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppsService } from '../development-shelf/services/apps.service';
import { ApplicationData } from '../development-shelf/components/application/application.component';
import { DiagramService } from "../diagram/services/diagram.service";

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit {

  items;
  checkoutForm: FormGroup;

  public _id: string;
  public _app: ApplicationData;
  public readonly _isNew: boolean;
  public tags: any;

  public _editMode = false;

  public diagrams: [];

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router: Router,
    private readonly _appsService: AppsService,
    private readonly _formBuilder: FormBuilder,
    private readonly _diagramService: DiagramService,
  ) {
    this._diagramService.getDiagrams().subscribe(a => {
      this.diagrams = a;
    });

    const id = this._activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this._id = id;
      this._isNew = this._id === 'new';
    }

    if (id !== 'new') {
      this._appsService.getApp(id).subscribe(
        response => {
          this._app = response;
          if (response?.tags) {
            let tags = '';
            for (const tag of response.tags) {
              tags += tag + ',';
            }
            this.tags = tags;
          }
          console.log(this._app);
          this.checkoutForm = this._formBuilder.group({
            version: [response.version, Validators.required],
            name: [response.name, Validators.required],
            applicationDiagramId: [response.applicationDiagramId, Validators.required],
            price: [response.price, Validators.required],
            iconURL: [response.iconURL, Validators.required],
            inputDataFormatDescription: [response.inputDataFormatDescription, Validators.required],
            outputDataFormatDescription: [response.outputDataFormatDescription, Validators.required],
            tags: [this.tags],
          });
        },
        error => {
          alert(error?.error?.detail || 'Unknown error appeared...');
        }
      );
    } else {
      this.checkoutForm = this._formBuilder.group({
        version: [1, Validators.required],
        name: ['', Validators.required],
        applicationDiagramId: ['', Validators.required],
        price: [1, Validators.required],
        iconURL: ['', Validators.required],
        inputDataFormatDescription: ['', Validators.required],
        outputDataFormatDescription: ['', Validators.required],
        tags: [[], Validators.min(0)],
      });
    }
  }

  ngOnInit(): void {
  }

  onSubmit(customerData, event): void {
    event.preventDefault();
    console.log('customerData', customerData);

    const tags = customerData.tags;
    if (tags) {
      customerData.tags = (tags as string).split(',');
    } else {
      customerData.tags = [];
    }

    if (this._id === 'new') {
      this._appsService.createApp(customerData).subscribe(
        response => {
          alert('Dodano ComputationUnit!');
          this._router.navigate(['development-shelf']);
        },
        error => {
          console.log(error);
          alert(error?.error?.detail || 'Url must be valid url');
        }
      );
    } else {
      this._appsService.updateApp({...customerData, id: this._id}).subscribe(response => {
        alert('Zauktualizowano ComputationUnit!');
        this._router.navigate(['development-shelf']);
        }, error => {
          console.log(error);
          alert(error?.error?.detail || 'Url must be valid url');
        }
      );
    }
  }

}
