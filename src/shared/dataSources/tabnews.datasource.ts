import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { Post } from '../entities/post.entity';
import { ITabnewsDataSource } from '../interfaces/dataSources';

@Injectable()
export class TabnewsDataSource implements ITabnewsDataSource {
  private connection: AxiosInstance;

  constructor() {
    this.connection = axios.create({
      baseURL: 'https://www.tabnews.com.br/api/v1',
    });
  }

  async listPosts(page: number, pageSize: number): Promise<Post[]> {
    try {
      const res = await this.connection.get(
        `/contents?page=${page}&per_page=${pageSize}`,
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
}
