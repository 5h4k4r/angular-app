import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostsService } from './backend/services';
import { ListPostsDto } from './backend/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  response$: Observable<ListPostsDto> | undefined
  constructor(
    private postsService: PostsService,
  ) {
    this.getHelloString();
  }

  getHelloString() {
    this.response$ = this.postsService.appControllerListPosts()
  }
}
