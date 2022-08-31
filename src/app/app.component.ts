import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  response$: Observable<any> | undefined
  constructor(
    private httpClient: HttpClient
  ) {
    this.getHelloString();
  }

  getHelloString() {
    this.response$ = this.httpClient.get<any>('/api').pipe(map(s => s.name));
  }
}
