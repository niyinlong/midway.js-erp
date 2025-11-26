import { RatingRating } from '../entity/rating/rating.ratingrating.entity';

/**
 * RatingRating 实体接口
 * 对应数据库表: rating_rating
 */
export interface RatingRatingInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 RatingRating 的参数接口
 */
export interface CreateRatingRatingDTO extends Partial<RatingRatingInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 RatingRating 的参数接口
 */
export interface UpdateRatingRatingDTO extends Partial<RatingRatingInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 RatingRating 的参数接口
 */
export interface QueryRatingRatingDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof RatingRatingInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * RatingRating 分页查询结果接口
 */
export interface RatingRatingPageResult {
  data: RatingRating[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * RatingRating API 响应接口
 */
export interface RatingRatingResponse {
  success: boolean;
  message: string;
  data?: RatingRating | RatingRating[] | RatingRatingPageResult;
  error?: string;
}
