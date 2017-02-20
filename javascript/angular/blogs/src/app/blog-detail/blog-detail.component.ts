import { Component, OnInit, Input } from '@angular/core';
// import { Router } from '@angular/router';
import { Blog } from '../shared/blog';
import { BlogService } from '../shared/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @Input()
  blog: Blog;

  constructor(private blogService: BlogService/*, private router: Router*/) { }

  ngOnInit() {
  }

  /*selectBlog(blog: Blog) {
    this.router.navigate(['blog', blog.id]);
  }*/
}
