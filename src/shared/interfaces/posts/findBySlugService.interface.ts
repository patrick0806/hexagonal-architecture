import { Post } from 'src/shared/entities/post.entity';

export interface IFindBySlugService {
  execute: (user: string, slug: string) => Promise<any>;
}
