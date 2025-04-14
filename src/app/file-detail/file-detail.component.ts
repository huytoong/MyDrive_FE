import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="file-detail">
      <h3>Chi tiết tệp</h3>
      <p><strong>Tên:</strong> {{ file?.name }}</p>
      <p><strong>Loại:</strong> {{ file?.type }}</p>
      <p><strong>Kích thước:</strong> {{ file?.size }} KB</p>
      <p><strong>Ngày tạo:</strong> {{ file?.createdAt }}</p>
      <button (click)="close()">Đóng</button>
    </div>
  `
})
export class FileDetailComponent {
  @Input() file: any; // 👈 QUAN TRỌNG: Cần khai báo
  @Output() closeDetail = new EventEmitter<void>();

  close() {
    this.closeDetail.emit();
  }
}
