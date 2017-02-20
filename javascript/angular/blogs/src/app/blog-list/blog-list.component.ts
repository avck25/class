import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { BlogService } from '../shared/blog.service';
import { Blog } from '../shared/blog';
import { TitleService } from '../shared/title.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  private blogs: Observable<Blog[]>;

  constructor(private blogService: BlogService, private titleService: TitleService) {
  }

  ngOnInit() {
    this.titleService.setTitle('Blog List');
    this.blogs = this.blogService.fetchBlogs();
  }
}
