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
    allUsers!: user[];
    selectedUsers?: user;
    representatives?: ProfileInfo[];
    loading: boolean = true;
    items!: MenuItem[];
    activeItem: any;
    visible: boolean = false;
    isEditMode: boolean = false;

    ngOnInit() {
        this._blogService.getUsers().subscribe(res => {
            this.filteredUsers = res.users;
            this.allUsers = res.users;
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
            },
            {
                label: 'More Details',
                icon: 'pi pi-eye',
                command: () => {
                    this.viewMoreDetails(this.activeItem);
                }
            }
        ];
    }

    filterUsersByImage(value: ProfileInfo[]) {
        if (value.length > 0) {
            this.filteredUsers = this.allUsers.filter(customer => {
                return value.some(rep => rep.image === customer.image);
            });
        }
        else {
            this.filteredUsers = this.allUsers;
        }
    }

    editUser(userId?: number) {
        const user = this.allUsers.find(i => i.id === userId);
        if (user) {
            this.selectedUsers = { ...user };
        }
        this.isEditMode = true;
        this.showDialog()
    }

    updateUserData(userData: user | any) {
        const userIndex = this.allUsers.findIndex(user => user.id === userData.id);
        if (userIndex !== -1) {
            this.allUsers[userIndex] = userData;
        } 
        this.visible = false;
    }


    deleteUser(userId?: number) {
        const indexToRemove = this.allUsers.findIndex(item => item.id == userId);
        if (indexToRemove !== -1) {
            this.allUsers.splice(indexToRemove, 1);
        }
    }

    viewMoreDetails(userId?: number) {
        this.selectedUsers = this.allUsers.find(i => i.id == userId);
        this.isEditMode = false;
        this.showDialog()
    }

    showDialog() {
        this.visible = true;
    }
}