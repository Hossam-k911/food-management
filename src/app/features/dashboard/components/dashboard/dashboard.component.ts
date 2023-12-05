import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/core/services/core/core.service';
import { SharedService } from 'src/app/shared/shared.service';

interface IMenu {
  title: string;
  icon: string;
  link: string;
  isActive: Boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private shared: SharedService,
    private _AuthService: CoreService,
    private router: Router
  ) {}
  isOpened: boolean;
  ngOnInit() {}
  isAdmin(): Boolean {
    return this._AuthService.role == 'SuperAdmin' ? true : false;
  }
  isUser(): boolean {
    return this._AuthService.role == 'SystemUser' ? true : false;
  }
  menu: IMenu[] = [
    {
      title: 'Home',
      icon: 'fa-solid fa-house',
      link: '/dashboard/home',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      title: 'Users',
      icon: 'fa-solid fa-users',
      link: '/dashboard/admin/users',
      isActive: this.isAdmin(),
    },
    {
      title: 'Recipes',
      icon: 'fa-solid fa-bowl-food',
      link: '/dashboard/admin/recipes',
      isActive: this.isAdmin(),
    },
    {
      title: 'Categories',
      icon: 'fa-solid fa-calendar-day',
      link: '/dashboard/admin/categories',
      isActive: this.isAdmin(),
    },
    {
      title: 'userRecipes',
      icon: 'fa-solid fa-calendar-day',
      link: '/dashboard/user/userRecipes',
      isActive: this.isUser(),
    },
    {
      title: 'favourites',
      icon: 'fa-solid fa-calendar-day',
      link: '/dashboard/user/favourites',
      isActive: this.isUser(),
    },
  ];
  logOut() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    this.router.navigate(['/auth']);
  }
  toggleSubscription(e) {
    this.isOpened = e;
  }
}
