import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comment-component',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() name: string ;
  @Input() body: string ;
  @Input() email: number ;

  constructor() { }

  ngOnInit(): void {
  }

}
