import { Component, OnInit } from '@angular/core';
import { ApplicationData } from './components/application/application.component';

@Component({
  selector: 'app-development-shelf',
  templateUrl: './development-shelf.component.html',
  styleUrls: ['./development-shelf.component.scss']
})
export class DevelopmentShelfComponent implements OnInit {

  public apps: ApplicationData[];

  constructor() {
    this.apps = this.generateApps();
  }

  ngOnInit(): void {
  }

  private generateApps(): ApplicationData[] {
    const result: ApplicationData[] = [];
    for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
      result.push({
        id: `${i}`,
        name: `App ${i}`,
        description: `This is description to app ${i}`,
        imageUrl: 'https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/53/9f/9b/539f9b6a-6f18-04ad-6293-a51c342bd8ae/AppIcon.png/1200x630bb.png',
      });
    }
    return result;
  }

}
