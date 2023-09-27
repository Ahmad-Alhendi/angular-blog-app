import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/blog/services/blog.service';

@Component({
  selector: 'app-shared-grid-view',
  templateUrl: './shared-grid-view.component.html',
  styleUrls: ['./shared-grid-view.component.css']
})
export class SharedGridViewComponent implements OnInit {
    constructor(private customerService: BlogService) {}

    ngOnInit() {       
        
     };
}