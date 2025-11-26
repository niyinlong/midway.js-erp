import { GamificationKarmaRank } from '../entity/gamification/gamification.gamificationkarmarank.entity';

/**
 * GamificationKarmaRank 实体接口
 * 对应数据库表: gamification_karma_rank
 */
export interface GamificationKarmaRankInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationKarmaRank 的参数接口
 */
export interface CreateGamificationKarmaRankDTO extends Partial<GamificationKarmaRankInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationKarmaRank 的参数接口
 */
export interface UpdateGamificationKarmaRankDTO extends Partial<GamificationKarmaRankInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationKarmaRank 的参数接口
 */
export interface QueryGamificationKarmaRankDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationKarmaRankInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationKarmaRank 分页查询结果接口
 */
export interface GamificationKarmaRankPageResult {
  data: GamificationKarmaRank[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationKarmaRank API 响应接口
 */
export interface GamificationKarmaRankResponse {
  success: boolean;
  message: string;
  data?: GamificationKarmaRank | GamificationKarmaRank[] | GamificationKarmaRankPageResult;
  error?: string;
}
