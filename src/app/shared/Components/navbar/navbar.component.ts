import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // userName = localStorage.getItem('userName');
  constructor(private shared: SharedService) {}
  userData: any = {};
  ngOnInit(): void {
    this.shared.getCurrentUserData().subscribe((res) => {
      this.userData = res;
    });
  }
}
