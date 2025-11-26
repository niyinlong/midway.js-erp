import { GamificationBadgeRuleBadgeRel } from '../entity/gamification/gamification.gamificationbadgerulebadgerel.entity';

/**
 * GamificationBadgeRuleBadgeRel 实体接口
 * 对应数据库表: gamification_badge_rule_badge_rel
 */
export interface GamificationBadgeRuleBadgeRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationBadgeRuleBadgeRel 的参数接口
 */
export interface CreateGamificationBadgeRuleBadgeRelDTO extends Partial<GamificationBadgeRuleBadgeRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationBadgeRuleBadgeRel 的参数接口
 */
export interface UpdateGamificationBadgeRuleBadgeRelDTO extends Partial<GamificationBadgeRuleBadgeRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationBadgeRuleBadgeRel 的参数接口
 */
export interface QueryGamificationBadgeRuleBadgeRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationBadgeRuleBadgeRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationBadgeRuleBadgeRel 分页查询结果接口
 */
export interface GamificationBadgeRuleBadgeRelPageResult {
  data: GamificationBadgeRuleBadgeRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationBadgeRuleBadgeRel API 响应接口
 */
export interface GamificationBadgeRuleBadgeRelResponse {
  success: boolean;
  message: string;
  data?: GamificationBadgeRuleBadgeRel | GamificationBadgeRuleBadgeRel[] | GamificationBadgeRuleBadgeRelPageResult;
  error?: string;
}
