import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-menu-tour-item',
  templateUrl: './header-menu-tour-item.component.html',
  styleUrls: ['./header-menu-tour-item.component.scss']
})
export class HeaderMenuTourItemComponent implements OnInit {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
