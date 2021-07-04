import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpserService } from '../httpser.service';
@Component({
  selector: 'app-app1',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.css']
})
export class App1Component implements OnInit {
  tabledata: any = [];
  commentdata: any = [];
  x: any;
  number1: number = 0;
  load: boolean = false;
  image: string = "assets/img/like.png";
  result2: any;
  result3: any;
  userForm = new FormGroup({
    post: new FormControl('')
  })
  userForm1 = new FormGroup({
    comm: new FormControl('')
  })
  result: any;
  loading = false;
  result1: any;
  constructor(private http2: HttpserService) { }

  ngOnInit(): void {
    this.getdata();
    this.getcommdata(this.result2);

  }
  sendata() {
    this.loading=true;
    const data1 = this.userForm.controls['post'].value;
    // console.log(data1);
    this.http2.postdata(data1).subscribe(
      (data: any) => {
        this.result = data.res1;
        console.log("result is", this.result);
        this.loading=false;
      },
      error => {
        console.log(error);
      });
    this.userForm.reset();
    this.getdata();
  }
  getdata() {
    this.http2.getdata1().subscribe((data: any) => {
      // console.log(data);
      this.tabledata = data;
      //console.log(this.tabledata);
      // console.log(this.tabledata[1].id);
    })

  }
  number(index: any) {
    console.log(index);
    this.http2.updatelike(index).subscribe((data2: any) => {
      this.result1 = data2.res2;
      console.log("befor data", this.result1);
    })
    this.getdata();
  }
  post(value: any) {
    // console.log(value);
    // this.load = true;
    // this.result2 = value;
    // console.log(this.result2);
    // console.log(this.result2.id);
    console.log("comments values",value)
  }
  postcomm() {
    const data4 = this.userForm1.controls['comm'].value;
    console.log(data4);
    this.http2.postcomm1(this.result2, data4).subscribe((data4: any) => {
      console.log(data4);
      this.result3 = data4.res4;
      console.log("befor comment data", this.result3);
    });
    this.userForm1.reset();
    this.getcommdata(this.result2);
  }
  getcommdata(data7: any) {
    this.http2.getcommdata1(data7).subscribe((data9: any) => {
      console.log("particulr data", data9.res5);
      this.commentdata = data9.res5;
    })

  }
}
