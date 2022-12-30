import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_ENDPOINTS } from '../../../config/api-endpoints.config';
import { GetSelectedPostsParams, Post } from '../../../models/post.model';

@Injectable({
	providedIn: 'root'
})
export class PostService {

	constructor(
		private http: HttpClient,
	) {}

	public getSelectedPosts({ take, skip }: GetSelectedPostsParams): Observable<Post[]> {
		const params = new HttpParams()
			.set('take', take)
			.set('skip', skip);

		return this.http.get<Post[]>(API_ENDPOINTS.feed, { params });
	}
}
