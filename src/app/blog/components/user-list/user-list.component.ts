import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { BlogService } from '../../services/blog.service';
import { ProfileInfo, user } from '../../models/blog-model';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    constructor(private _blogService: BlogService) { };

    filteredUsers!: user[];
    allUsres!: user[];
    representatives?: ProfileInfo[];
    loading: boolean = true;
    items!: MenuItem[];
    activeItem:any;

    ngOnInit() {
        this._blogService.getUsers().subscribe(res => {
            this.filteredUsers = res.users;
            this.allUsres = res.users;
            this.representatives = res.users.map((item: user) => ({
                name: item.firstName,
                image: item.image,
            }));
            this.loading = false;
        });
        this.items = [
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                command: () => {
                    this.editUser(this.activeItem);
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-fw pi-trash',
                command: () => {
                    this.deleteUser(this.activeItem);
                }
            }
        ];
    }

    filterUsersByImage(value: ProfileInfo[]) {
        if (value.length > 0) {
            this.filteredUsers = this.allUsres.filter(customer => {
                return value.some(rep => rep.image === customer.image);
            });
        }
        else {
            this.filteredUsers = this.allUsres;
        }
    }

    editUser(userId?:number){
    }
 
    deleteUser(userId?:number){
    }
}