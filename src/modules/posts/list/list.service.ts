import { Inject, Injectable } from '@nestjs/common';
import { TabnewsDataSource } from 'src/shared/dataSources/tabnews.datasource';
import { Post } from 'src/shared/entities/post.entity';
import { ITabnewsDataSource } from 'src/shared/interfaces/dataSources';
import { IListService } from 'src/shared/interfaces/posts';
//Interaction Layer
@Injectable()
export class ListService implements IListService {
  constructor(
    @Inject(TabnewsDataSource)
    private tabnewsDataSource: ITabnewsDataSource,
  ) {}

  async execute(page: number, pageSize: number): Promise<Post[]> {
    return this.tabnewsDataSource.listPosts(page, pageSize);
  }
}
