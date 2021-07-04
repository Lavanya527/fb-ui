import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpserService {

  constructor(private http1:HttpClient) { }
  postdata(message:any){
    console.log("value",message);
   // var data={name:message};
    //return this.http1.post('/api/post',{name:"lavanya"});
   var x= this.http1.post('/api/post',{msg:message});
   console.log("after subscribe",x)
    return x;
  }
  getdata1(){
    return this.http1.get('/api/data');
  }
  updatelike(data5:any){
    console.log("value",data5.id);
    let likecount=data5.postlike+1;
    var y=this.http1.put('/api/data/'+data5.id,{Lcount:likecount});
    console.log(y);
    return y;
  }
 
  postcomm1(commdata:any,comm:any){
    console.log(commdata.id);
    var z= this.http1.post('/api/comm',{id:commdata.id,comm1:comm});
    console.log(z);
    return z;
  }
  getcommdata1(datacomm:any){
    console.log(datacomm);
    var z1= this.http1.get('/api/commdata/'+datacomm.id);
    console.log(z1);
    return z1;
  }
}
