import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Iposts } from '../interfaces/posts';
import { FeedService } from '../services/feed.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css'],
  exportAs: 'ngForm'
})
export class AddPostsComponent implements OnInit {

  post: any;

  constructor(private feedService:FeedService) { }

  
  ngOnInit(): void {
    this.post = {};
  }

  criar(frm: FormGroup){
    this.feedService.criar(this.post)

    frm.reset;
  }
}
