import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/first';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../shared/blog.service';
import { Post } from '../shared/post';
import { Blog } from '../shared/blog';
import { TitleService } from '../shared/title.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {
  private posts: Observable<Post[]>;
  private sub: Subscription;
  private blog: Blog;

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService, private titleService: TitleService) { }

  ngOnInit() {
    // const id = this.activatedRoute.snapshot.params['id'];
    this.sub = this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.blogService.fetchBlog(id).first().subscribe(blog => {
        this.titleService.setTitle(blog.name + '\'s Blog');
      });
      this.posts = this.blogService.fetchPosts(id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
