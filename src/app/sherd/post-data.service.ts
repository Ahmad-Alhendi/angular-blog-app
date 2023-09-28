import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../blog/models/blog-model';

@Injectable({
  providedIn: 'root',
})
export class PostDataService {
  private postDataSubject = new Subject<Post>();

  updatePostData(postData: Post) {
    this.postDataSubject.next(postData);
  }

  getPostData() {
    return this.postDataSubject.asObservable();
  }
}
