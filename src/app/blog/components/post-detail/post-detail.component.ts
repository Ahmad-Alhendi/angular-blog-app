import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../../models/blog-model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() postDetails: Post = new Post();
  @Input() isEditMode?: boolean;
  @Output() updatePostData = new EventEmitter<Post>();

  ngOnInit() {

  }

  ouSubmit() {
    this.updatePostData.emit(this.postDetails);
  }
}
