import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { PostService } from '../../../core/services/post/post.service';
import { GetSelectedPostsParams, Post } from '../../../models/post.model';

@Component({
	selector: 'app-all-posts',
	templateUrl: './all-posts.component.html',
	styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {

	@ViewChild(IonInfiniteScroll)
	public infiniteScroll!: IonInfiniteScroll;

	public allLoadedPosts: Post[] = [];

	private queryParams!: GetSelectedPostsParams;
	private numOfPostsToFetch: number = 5;
	private numOfPostsToSkip: number = 0;

	constructor(
		private postService: PostService,
	) {}

	public ngOnInit() {
		this.getPosts(null)
	}

	public onIonInfinite(event: any) {
		this.getPosts(event);
	}

	public getPosts(event: any) {
		// For demo purposes, we cap the number of available posts to display at 20
		if (event && this.numOfPostsToSkip === 20) {
			event.target.disabled = true;
		}

		this.queryParams = {
			take: this.numOfPostsToFetch,
			skip: this.numOfPostsToSkip,
		};

		this.postService.getSelectedPosts(this.queryParams).subscribe({
			next: (posts: Post[]) => {
				this.allLoadedPosts.push(...posts);

				if (event) {
					event.target.complete();
				}

				this.numOfPostsToSkip += this.numOfPostsToFetch;
			},
			error: () => {}
		})
	}
}
