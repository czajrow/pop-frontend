import { Component, OnInit } from '@angular/core';
import { ApplicationData } from './components/application/application.component';

@Component({
  selector: 'app-computation-cluster-shelf',
  templateUrl: './computation-cluster-shelf.component.html',
  styleUrls: ['./computation-cluster-shelf.component.scss']
})
export class ComputationClusterShelfComponent implements OnInit {

  public apps: ApplicationData[];

  constructor() {
    this.apps = this.generateApps();
  }

  ngOnInit(): void {
  }

  private generateApps(): ApplicationData[] {
    const result: ApplicationData[] = [];
    for (const i of [0, 1, 2, 3, 4, 5, 6, 7]) {
      result.push({
        id: `${i}`,
        name: `Cluster ${i}`,
        description: `This cluster is available to use.`,
        imageUrl: '',
      });
    }
    return result;
  }

}
