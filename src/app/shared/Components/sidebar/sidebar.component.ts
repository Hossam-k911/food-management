import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/core/services/core/core.service';
import { IMenu } from './models/menu.model';
import { SharedService } from '../../shared.service';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {}
  @Output() navchange = new EventEmitter<boolean>();
  isOpened: boolean = false;
  constructor(
    private core: CoreService,
    private router: Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private sharedService: SharedService
  ) {}
  isAdmin(): boolean {
    return this.core.role == 'SuperAdmin' ? true : false;
  }
  isUser(): boolean {
    return this.core.role == 'SystemUser' ? true : false;
  }
  menu: IMenu[] = [
    {
      title: 'Home',
      icon: 'fa-house',
      link: '/dashboard/home',
      isActive: this.isAdmin() || this.isUser(),
    },
    {
      title: 'Users',
      icon: 'fa-user-group',
      link: '/dashboard/admin/users',
      isActive: this.isAdmin(),
    },
    {
      title: 'Recipes',
      icon: 'fa-bowl-rice',
      link: '/dashboard/admin/recipes',
      isActive: this.isAdmin(),
    },
    {
      title: 'Categories',
      icon: 'fa-calendar-days',
      link: '/dashboard/admin/categories',
      isActive: this.isAdmin(),
    },
    {
      title: 'MyRecipes',
      icon: 'fa-utensils',
      link: '/dashboard/user/recipes',
      isActive: this.isUser(),
    },
    {
      title: 'Favorates',
      icon: 'fa-heart',
      link: '/dashboard/user/favorites',
      isActive: this.isUser(),
    },
  ];
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userName');
    this.router.navigate(['/auth']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      data: {},
      width: '40%',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
      }
    });
  }

  toggle() {
    this.isOpened = !this.isOpened;
    this.navchange.emit(this.isOpened);
  }
}
