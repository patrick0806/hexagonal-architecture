import { Module } from '@nestjs/common';
import { TabnewsDataSource } from 'src/shared/dataSources/tabnews.datasource';
import { ListController } from './list/list.controller';
import { ListService } from './list/list.service';

@Module({
  imports: [],
  controllers: [ListController],
  providers: [ListService, TabnewsDataSource],
})
export class PostModule {}
