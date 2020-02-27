import {ChangeDetectionStrategy, Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-nav-item',
  templateUrl: './header-nav-item.component.html',
  styleUrls: ['./header-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderNavItemComponent implements OnInit {
  @Input() title: string;
  @Input()@HostBinding('class.vip') isVIP: boolean;
  @Input()@HostBinding('class.menu') hasMenu: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
