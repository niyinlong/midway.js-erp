import { GamificationBadgeUser } from '../entity/gamification/gamification.gamificationbadgeuser.entity';

/**
 * GamificationBadgeUser 实体接口
 * 对应数据库表: gamification_badge_user
 */
export interface GamificationBadgeUserInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationBadgeUser 的参数接口
 */
export interface CreateGamificationBadgeUserDTO extends Partial<GamificationBadgeUserInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationBadgeUser 的参数接口
 */
export interface UpdateGamificationBadgeUserDTO extends Partial<GamificationBadgeUserInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationBadgeUser 的参数接口
 */
export interface QueryGamificationBadgeUserDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationBadgeUserInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationBadgeUser 分页查询结果接口
 */
export interface GamificationBadgeUserPageResult {
  data: GamificationBadgeUser[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationBadgeUser API 响应接口
 */
export interface GamificationBadgeUserResponse {
  success: boolean;
  message: string;
  data?: GamificationBadgeUser | GamificationBadgeUser[] | GamificationBadgeUserPageResult;
  error?: string;
}
