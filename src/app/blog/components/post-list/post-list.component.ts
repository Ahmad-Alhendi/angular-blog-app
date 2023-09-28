import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { PageEvent, Post } from '../../models/blog-model';
import { MenuItem } from 'primeng/api';
import { PostDataService } from '../../../sherd/post-data.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  constructor(private _blogService: BlogService,
    private postDataService: PostDataService) { };
  posts: Post[] = [];
  loading: boolean = true;
  visible: boolean = false;
  items!: MenuItem[];
  isEditMode!: boolean;
  selectedPost: Post = new Post();
  first: number = 0;
  rows: number = 10;
  totalRecords!: number;
  ngOnInit() {

    this.postDataService.getPostData().subscribe((postData: Post) => {
      this.posts.unshift(postData);
    });

    this._blogService.getPosts().subscribe(res => {
      this.posts = res.posts;
      this.totalRecords = res.limit;
    });
    this.items = [
      {
        label: 'whatsapp',
        icon: 'pi pi-whatsapp',

      },
      {
        label: 'twitter',
        icon: 'pi pi-twitter',

      },
      {
        label: 'telegram',
        icon: 'pi pi-telegram',

      },
      {
        label: 'facebook',
        icon: 'pi pi-facebook',

      }
    ];
  }
  editPost(postId: number) {
    const post = this.posts.find(i => i.id === postId);
    if (post) {
      this.selectedPost = { ...post };
    }
    this.isEditMode = true;
    this.visible = true;
  }
  deletePost(postId: number) {
    const indexToRemove = this.posts.findIndex(item => item.id == postId);
    if (indexToRemove !== -1) {
      this.posts.splice(indexToRemove, 1);
    }
  }

  updatePostData(postData: Post | any) {
    const postIndex = this.posts.findIndex(post => post.id === postData.id);
    if (postIndex !== -1) {
      this.posts[postIndex] = postData;
    }
    this.visible = false;
  }

  onPageChange(event: PageEvent | any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
