import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  resPosts:any;
  constructor(private data:PostServiceService) { 
    this.resPosts=[];
  }

  ngOnInit(): void {
    this.ObtenerPosts();
  }

  ObtenerPosts(): void {
    this.data
    .obtenerPosts()
    .subscribe((resP:any) => {
      console.log(resP);
      this.resPosts=resP;
    });
  }

  add40lines() {
    let lineCounter = this.resPosts.length;
    for (let i = 0; i < 40; i ++) {
      lineCounter ++;
    }
  }

}
