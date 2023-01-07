import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { API_ROUTES } from 'src/shared/constants/apiRoutes';
import { Post } from 'src/shared/entities/post.entity';
import { IPosts } from 'src/shared/interfaces';
import { FindBySlugService } from './findBySlug.service';
// Transport Layer
@Controller(API_ROUTES.posts)
export class FindBySlugController {
  constructor(
    @Inject(FindBySlugService)
    private findBySlugService: IPosts.IFindBySlugService,
  ) {}

  @Get()
  async handler(
    @Param('user') user: string,
    @Param('slug') slug: string,
  ): Promise<Post[]> {
    return this.findBySlugService.execute(user, slug);
  }
}
