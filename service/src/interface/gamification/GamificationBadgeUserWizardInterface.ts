import { GamificationBadgeUserWizard } from '../entity/gamification/gamification.gamificationbadgeuserwizard.entity';

/**
 * GamificationBadgeUserWizard 实体接口
 * 对应数据库表: gamification_badge_user_wizard
 */
export interface GamificationBadgeUserWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationBadgeUserWizard 的参数接口
 */
export interface CreateGamificationBadgeUserWizardDTO extends Partial<GamificationBadgeUserWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationBadgeUserWizard 的参数接口
 */
export interface UpdateGamificationBadgeUserWizardDTO extends Partial<GamificationBadgeUserWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationBadgeUserWizard 的参数接口
 */
export interface QueryGamificationBadgeUserWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationBadgeUserWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationBadgeUserWizard 分页查询结果接口
 */
export interface GamificationBadgeUserWizardPageResult {
  data: GamificationBadgeUserWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationBadgeUserWizard API 响应接口
 */
export interface GamificationBadgeUserWizardResponse {
  success: boolean;
  message: string;
  data?: GamificationBadgeUserWizard | GamificationBadgeUserWizard[] | GamificationBadgeUserWizardPageResult;
  error?: string;
}
