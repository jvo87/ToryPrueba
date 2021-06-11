import { Component, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  resPosts:any;
  limit:number;
  constructor(private data:PostServiceService) { 
    this.resPosts=[];
    this.limit=20;
  }

  ngOnInit(): void {
    this.ObtenerPosts();
  }

  ObtenerPosts(): void {
    this.data
    .obtenerPosts()
    .subscribe((resP:any) => {
      console.log(resP);
      this.resPosts=resP.slice(0,this.limit);
    });
  }

  onScroll() {
    if(this.limit<100){
      this.limit+=20;
      console.log("entro");
    }
    this.ObtenerPosts();
    console.log("no entro");
  }

}
