import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticlesEntity } from './entities/articles.entity';
import { Repository } from 'typeorm';
import { UsersEntity } from '../user/entities/users.entity';
import { ArticleInfoEntity } from './entities/article_info.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticlesEntity)
    private readonly articlesRepository: Repository<ArticlesEntity>,
    @InjectRepository(ArticleInfoEntity)
    private readonly articleInfoRepository: Repository<ArticleInfoEntity>,
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>
  ) {}

  async findAll(): Promise<ArticlesEntity[]> {
    return await this.articlesRepository.find();
  }

  async findById(id: string): Promise<ArticlesEntity | null> {
    return await this.articlesRepository.findOne({ where: { id } });
  }

  async getArticleInfo(id: string) {
    return this.usersRepository
      .createQueryBuilder("users")
      .select([
        "users.id as id",
        "users.fullname as fullname",
        "users.avatar as avatar",
        "articles.title as title",
        "articleInfo.main_image as main_image",
        "articleInfo.information as information",
        "articleInfo.titles as titles",
        "articleInfo.more_info as more_info",
      ])
      .innerJoin('users.articles', 'articles')
      .innerJoin('articles.articleInfo', 'articleInfo')
      .where("articles.id = :id", { id })
      .getRawOne();
  }
}
