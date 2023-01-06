import { Post } from 'src/shared/entities/post.entity';

export interface IListService {
  execute: (pagr: number, pageSize: number) => Promise<Post[]>;
}
