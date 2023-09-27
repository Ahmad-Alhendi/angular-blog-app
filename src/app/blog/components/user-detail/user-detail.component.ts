import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { user } from '../../models/blog-model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnChanges {
  @Input() userDetails?: user;
  @Input() isEditMode?: boolean;
  @Output() updateUserDate =new EventEmitter<user>();
  
  ngOnInit() {
  }
  ngOnChanges() {
  }
  onsubmit(){
    this.updateUserDate.emit(this.userDetails);
  }
}