// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create-folder-dialog',
//   imports: [],
//   templateUrl: './create-folder-dialog.component.html',
//   styleUrl: './create-folder-dialog.component.scss'
// })
// export class CreateFolderDialogComponent {

// }
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-folder-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Tạo thư mục mới</h2>
    <input [(ngModel)]="folderName" placeholder="Nhập tên thư mục" />
    <br /><br />
    <button (click)="create()" [disabled]="!folderName.trim()">Tạo</button>
    <button (click)="close()">Hủy</button>
  `
})
export class CreateFolderDialogComponent {
  folderName: string = '';

  constructor(
    private dialogRef: MatDialogRef<CreateFolderDialogComponent>
  ) {}

  create() {
    // Gửi tên thư mục về HomeComponent
    this.dialogRef.close(this.folderName.trim());
  }

  close() {
    // Đóng dialog, không gửi gì
    this.dialogRef.close();
  }
}
