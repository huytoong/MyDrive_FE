import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Cho ngSwitch
import { FormsModule } from '@angular/forms';   // Cho ngModel

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchQuery: string = '';
  username: string = 'User';
  activeTab: string = 'myDrive';

  createNew() {
    alert('Tạo mới: Chưa triển khai logic!');
  }

  showMyDrive() {
    this.activeTab = 'myDrive';
  }

  showShared() {
    this.activeTab = 'shared';
  }

  showStorage() {
    this.activeTab = 'storage';
  }

  search() {
    console.log('Tìm kiếm:', this.searchQuery);
  }

  logout() {
    alert('Đăng xuất!');
  }
}