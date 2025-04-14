import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Cho ngSwitch
import { FormsModule } from '@angular/forms';   // Cho ngModel
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CreateFolderDialogComponent } from '../create-folder-dialog/create-folder-dialog.component';
import { FileDetailComponent } from '../file-detail/file-detail.component'; // đường dẫn tùy thuộc bạn tạo component ở đâu
//import { FileDetailComponent } from '../file-detail/file-detail.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule,MatMenuModule,MatButtonModule,FileDetailComponent, MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchQuery: string = '';
  username: string = 'User';
  activeTab: string = 'myDrive';
  constructor(private dialog: MatDialog) {}
  selectedFile: any = null;
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
  openCreateFolder() {
    const dialogRef = this.dialog.open(CreateFolderDialogComponent);

    dialogRef.afterClosed().subscribe((folderName: string) => {
      if (folderName) {
        console.log('Tên thư mục:', folderName);
      }
    });
  }
  
  
  openUploadFile() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
  
    fileInput.onchange = (event: any) => {
      const file = event.target.files[0];
      if (file) {
        console.log('Tệp đã chọn:', file.name, '-', file.size, 'bytes');
      }
    };
  
    fileInput.click(); // ⚠️ cái này mở hộp chọn file
  }
 openFileDetail(file: any) {
  this.selectedFile = file;
 } 
// logout() {
//   console.log('Đăng xuất');
// }
files = [
  { id: 'file1', name: 'Tài liệu A', type: 'PDF', size: 123, createdAt: '2025-04-01' },
  { id: 'file2', name: 'Ảnh B', type: 'image/jpeg', size: 456, createdAt: '2025-04-02' },
  { id: 'file3', name: 'Tệp C', type: 'docx', size: 789, createdAt: '2025-04-03' }
];


downloadFile(file: any) {
  console.log('Tải file:', file.name);
}

deleteFile(file: any) {
  console.log('Xoá file:', file.name);
}
// renameFile(file: any) {
//   const newName = prompt('Nhập tên mới cho file:', file.name);
//   if (newName) {
//     file.name = newName; // tạm thời đổi trực tiếp trong UI
//     // Sau này khi có backend thì gọi API đổi tên ở đây
//     console.log('Tên mới:', newName);
//   }
// }
renameFile(file: any) {
  const newName = prompt('Nhập tên mới cho file:', file.name);
  if (newName) {
    file.name = newName;

    // Cập nhật loại file dựa trên đuôi mới
    const extension = newName.split('.').pop()?.toLowerCase();

    if (extension) {
      switch (extension) {
        case 'pdf':
          file.type = 'PDF';
          break;
        case 'txt':
          file.type = 'Text';
          break;
        case 'docx':
          file.type = 'Word Document';
          break;
        case 'jpg':
        case 'jpeg':
        case 'png':
          file.type = 'Image';
          break;
        default:
          file.type = 'Unknown';
      }
    }
  }
}

shareFile(file: any) {
  const shareLink = `https://mydrive.com/share/${file.id || 'abc123'}`;
  navigator.clipboard.writeText(shareLink).then(() => {
    alert('Link chia sẻ đã được copy: ' + shareLink);
  });
}

  
}
