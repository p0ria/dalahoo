import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-middle-nav',
  templateUrl: './footer-middle-nav.component.html',
  styleUrls: ['./footer-middle-nav.component.scss']
})
export class FooterMiddleNavComponent implements OnInit {
  menus = [
  {
    title: 'ارتباط با ما',
    items: ['شکایت', 'فرصت شغلی', 'تماس با ما']
  }, {
    title: 'عمومی',
    items: ['درباره ما', 'منشور', 'رضایتمندی همسفران', 'وبلاگ', 'مقاصد دالاهو', 'English']
  }, {
    title: 'سفرها',
    items: ['سفرهای خارجی', 'سفرهای چندروزه داخلی', 'سفرهای یکروزه', 'سفرهای اختصاصی', 'سفر به استانبول', 'تعطیلی اسفند', 'یک روزه های نوروز 99']
  },
  {
    title: 'سایر خدمات',
    items: ['تور شیراز', 'تور قونیه', 'تور استانبول', 'تور برزیل', 'تور ویتنام', 'تور نپال', 'ویزای ایران', 'ویزای آذربایجان']
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
