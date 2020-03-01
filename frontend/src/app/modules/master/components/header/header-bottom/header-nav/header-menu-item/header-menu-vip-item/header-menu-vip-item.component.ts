import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-menu-vip-item',
  templateUrl: './header-menu-vip-item.component.html',
  styleUrls: ['./header-menu-vip-item.component.scss']
})
export class HeaderMenuVipItemComponent implements OnInit {
  @Input() title: string;
  @Input() imageUrl: string;
  constructor() { }

  ngOnInit(): void {
  }

}
