import { GamificationBadge } from '../entity/gamification/gamification.gamificationbadge.entity';

/**
 * GamificationBadge 实体接口
 * 对应数据库表: gamification_badge
 */
export interface GamificationBadgeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationBadge 的参数接口
 */
export interface CreateGamificationBadgeDTO extends Partial<GamificationBadgeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationBadge 的参数接口
 */
export interface UpdateGamificationBadgeDTO extends Partial<GamificationBadgeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationBadge 的参数接口
 */
export interface QueryGamificationBadgeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationBadgeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationBadge 分页查询结果接口
 */
export interface GamificationBadgePageResult {
  data: GamificationBadge[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationBadge API 响应接口
 */
export interface GamificationBadgeResponse {
  success: boolean;
  message: string;
  data?: GamificationBadge | GamificationBadge[] | GamificationBadgePageResult;
  error?: string;
}
