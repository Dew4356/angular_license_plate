import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FastApiService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedFile: File | null = null;
  number = '';
  province = '';
  url: any;
  urlNew: any;

  selectedFile2: File | null = null;
  color = '';
  url2: any;
  urlNew2: any;

  constructor(private http: HttpClient, private service: FastApiService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.url = reader.result;
    };
  }

  remove() {
    this.selectedFile = null;
    this.url = '';
    this.number = '';
    this.province = '';
    this.urlNew = '';
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.service.licenPlate(formData).subscribe(
      (response: any) => {
        console.log(response);
        this.number = response.lp_number;
        this.province = response.province;
        this.urlNew = response.detect_img;
      },
      (error) => {
        console.error(error);
        this.number =
          'ไม่พบป้ายทะเบียนจากรูปภาพดังกล่าว กรุณาอัพโหลดรูปภาพอื่น';
        this.province = '';
      }
    );
  }

  onFileSelected2(event: any): void {
    this.selectedFile2 = event.target.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.url2 = reader.result;
    };
  }

  remove2() {
    this.selectedFile2 = null;
    this.url2 = '';
    this.color = '';
    this.urlNew2 = '';
  }

  onSubmit2(): void {
    if (!this.selectedFile2) {
      return;
    }

    const formData = new FormData();
    formData.append('image', this.selectedFile2);

    this.service.carColor(formData).subscribe(
      (response: any) => {
        console.log(response);
        this.color = response.color;
        this.urlNew2 = response.detect_img;
      },
      (error) => {
        console.error(error);
        this.color = 'ไม่พบยานพาหนะจากรูปภาพดังกล่าว กรุณาอัพโหลดรูปภาพอื่น';
      }
    );
  }
}
