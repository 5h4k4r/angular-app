/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { ListPostsDto } from '../models/list-posts-dto';

@Injectable({
  providedIn: 'root',
})
export class PostsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation appControllerListPosts
   */
  static readonly AppControllerListPostsPath = '/posts';

  /**
   * Get hello world response.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appControllerListPosts()` instead.
   *
   * This method doesn't expect any request body.
   */
  appControllerListPosts$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ListPostsDto>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.AppControllerListPostsPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ListPostsDto>;
      })
    );
  }

  /**
   * Get hello world response.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appControllerListPosts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  appControllerListPosts(params?: {
    context?: HttpContext
  }
): Observable<ListPostsDto> {

    return this.appControllerListPosts$Response(params).pipe(
      map((r: StrictHttpResponse<ListPostsDto>) => r.body as ListPostsDto)
    );
  }

  /**
   * Path part for operation appControllerGetHello
   */
  static readonly AppControllerGetHelloPath = '/';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appControllerGetHello()` instead.
   *
   * This method doesn't expect any request body.
   */
  appControllerGetHello$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PostsService.AppControllerGetHelloPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appControllerGetHello$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  appControllerGetHello(params?: {
    context?: HttpContext
  }
): Observable<void> {

    return this.appControllerGetHello$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
