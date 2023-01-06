import { Controller, Get, Inject, Query } from '@nestjs/common';
import { API_ROUTES } from 'src/shared/constants/apiRoutes';
import { Post } from 'src/shared/entities/post.entity';
import { IPosts } from 'src/shared/interfaces';
import { ListService } from './list.service';
// Transport Layer
@Controller(API_ROUTES.posts)
export class ListController {
  constructor(
    @Inject(ListService)
    private listService: IPosts.IListService,
  ) {}

  @Get()
  async handler(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ): Promise<Post[]> {
    return this.listService.execute(page, pageSize);
  }
}
