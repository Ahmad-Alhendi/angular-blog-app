import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Post } from '../../blog/models/blog-model';
import { PostDataService } from '../../sherd/post-data.service';
import { Router } from '@angular/router';
import { BlogKeys } from '../../blog/routing keys/blog-routing-keys';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private postDataService: PostDataService,
  private router: Router) { }

  public items: MenuItem[] | undefined;
  public visible: boolean = false;
  @ViewChild('postDetail') postDetail: any; // You can replace 'any' with the correct type if known

  ngOnInit() {
    this.items = [
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        command: () => {
          this.navigeteToUsersPage();
        },
      },
      {
        label: 'Posts',
        icon: 'pi pi-fw pi-calendar',
        command: () => {
          this.navigeteToPostsPage();
        },
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
            command: () => {
              this.addNewPost();
            }
          },
        ]
      }
    ];
  }
  addNewPost() {
    this.visible = true;
  }
  updatePostData(postData: Post | any) {
    this.postDataService.updatePostData(postData);
    this.visible = false;
  }
  navigeteToUsersPage() {
    const routeString = `/${BlogKeys.Users}`;
    this.router.navigate([routeString]);
  }
  navigeteToPostsPage() {
    const routeString = `/${BlogKeys.Posts}`;
    this.router.navigate([routeString]);
  }
}
