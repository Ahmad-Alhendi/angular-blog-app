import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { BlogService } from '../../services/blog.service';
import { Column, ExportColumn, PageEvent, ProfileInfo, user } from '../../models/blog-model';
import { MenuItem } from 'primeng/api';
import * as FileSaver from 'file-saver';


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
  first: number = 0;
  rows: number = 10;
  paging?: PageEvent;
  cols!: Column[];
  exportColumns!: ExportColumn[];
  totalRecords!: number;

  ngOnInit() {
    this.prepareExportableColumns();

    this.paging = { first: this.first, rows: this.rows };
    this.getAllUsers(this.paging);

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
  onPageChange(event: PageEvent | any) {
    this.first = event.first;
    this.rows = event.rows;
    this.getAllUsers(event);
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

  getAllUsers(paging?: PageEvent) {
    this._blogService.getUsers(paging).subscribe(res => {
      debugger
      this.filteredUsers = res.users;
      this.allUsers = res.users;
      this.totalRecords = res.total;

      this.representatives = res.users.map((item: user) => ({
        name: item.firstName,
        image: item.image,
      }));
      this.loading = false;
    });
  }
  showDialog() {
    this.visible = true;
  }
  prepareExportableColumns() {
    this.cols = [
      { field: 'firstName', header: 'firstName' },
      { field: 'lastName', header: 'lastName' },
      { field: 'age', header: 'age' },
      { field: 'email', header: 'email' },
      { field: 'phone', header: 'phone' }
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        (doc as any).autoTable(this.exportColumns, this.filteredUsers);
        doc.save('Users.pdf');
      });
    });
  }
  exportExcel() {
    import('xlsx').then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(this.filteredUsers);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'users');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}
