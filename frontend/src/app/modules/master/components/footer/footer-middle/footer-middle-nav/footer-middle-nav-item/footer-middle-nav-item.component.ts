import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-middle-nav-item',
  templateUrl: './footer-middle-nav-item.component.html',
  styleUrls: ['./footer-middle-nav-item.component.scss']
})
export class FooterMiddleNavItemComponent implements OnInit {
  @Input() title: string;
  @Input() items: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
