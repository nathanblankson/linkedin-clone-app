export interface Post {
	id: number;
	body: string;
	createdAt: Date;
}

export interface GetSelectedPostsParams {
	take: number;
	skip: number;
}
