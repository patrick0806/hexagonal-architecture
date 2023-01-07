import { Post } from 'src/shared/entities/post.entity';

export interface ITabnewsDataSource {
  listPosts: (page: number, pageSize: number) => Promise<Post[]>;
  getPostContent: (user: string, slug: string) => Promise<any>;
}
