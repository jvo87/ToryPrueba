import { Component, Input, OnInit } from '@angular/core';
import { PostServiceService } from 'src/app/service/post-service.service';

@Component({
  selector: 'post-component',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() title: string ;
  @Input() body: string ;
  @Input() id: number ;

  resComment:any;
  ocultar=false;

  constructor(private data:PostServiceService) { 
    this.resComment=[];
  }

  ngOnInit(): void {
  }

  ObtenerComment(id:number): void {
    if(this.ocultar){
      this.ocultar=false;
    }else{
      this.ocultar=true;
      this.data
        .obtenerComments(id)
        .subscribe((res:any) => {
          console.log(res);
          this.resComment=res;
        });
    }
  
  }
}
