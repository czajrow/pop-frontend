import {Component, OnInit} from '@angular/core';

interface SidebarItem {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  readonly items: SidebarItem[] = [
    {
      title: 'Home',
      link: '/home',
      icon: 'home',
    },
    {
      title: 'Diagram',
      link: '/diagram',
      icon: 'diagram'
    },
    {
      title: 'Computation Unit Shelf',
      link: '/computation-unit-shelf',
      icon: 'computation-unit-shelf'
    },
    {
      title: 'Development Shelf',
      link: '/development-shelf',
      icon: 'development-shelf'
    },
    {
      title: 'Computation Cluster Shelf',
      link: '/computation-cluster-shelf',
      icon: 'computation-cluster-shelf'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
