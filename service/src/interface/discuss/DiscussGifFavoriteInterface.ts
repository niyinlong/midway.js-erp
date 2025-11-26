import { DiscussGifFavorite } from '../entity/discuss/discuss.discussgiffavorite.entity';

/**
 * DiscussGifFavorite 实体接口
 * 对应数据库表: discuss_gif_favorite
 */
export interface DiscussGifFavoriteInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 DiscussGifFavorite 的参数接口
 */
export interface CreateDiscussGifFavoriteDTO extends Partial<DiscussGifFavoriteInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 DiscussGifFavorite 的参数接口
 */
export interface UpdateDiscussGifFavoriteDTO extends Partial<DiscussGifFavoriteInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 DiscussGifFavorite 的参数接口
 */
export interface QueryDiscussGifFavoriteDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof DiscussGifFavoriteInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * DiscussGifFavorite 分页查询结果接口
 */
export interface DiscussGifFavoritePageResult {
  data: DiscussGifFavorite[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * DiscussGifFavorite API 响应接口
 */
export interface DiscussGifFavoriteResponse {
  success: boolean;
  message: string;
  data?: DiscussGifFavorite | DiscussGifFavorite[] | DiscussGifFavoritePageResult;
  error?: string;
}
