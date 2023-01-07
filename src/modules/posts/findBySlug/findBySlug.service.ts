import { Inject, Injectable } from '@nestjs/common';
import { TabnewsDataSource } from 'src/shared/dataSources/tabnews.datasource';
import { IPosts } from 'src/shared/interfaces';
import { ITabnewsDataSource } from 'src/shared/interfaces/dataSources';

@Injectable()
export class FindBySlugService implements IPosts.IFindBySlugService {
  constructor(
    @Inject(TabnewsDataSource)
    private tabnewsDataSource: ITabnewsDataSource,
  ) {}
  async execute(user: string, slug: string) {
    return this.tabnewsDataSource.getPostContent(user, slug);
  }
}
