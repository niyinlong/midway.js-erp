import { GamificationGoalWizard } from '../entity/gamification/gamification.gamificationgoalwizard.entity';

/**
 * GamificationGoalWizard 实体接口
 * 对应数据库表: gamification_goal_wizard
 */
export interface GamificationGoalWizardInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationGoalWizard 的参数接口
 */
export interface CreateGamificationGoalWizardDTO extends Partial<GamificationGoalWizardInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationGoalWizard 的参数接口
 */
export interface UpdateGamificationGoalWizardDTO extends Partial<GamificationGoalWizardInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationGoalWizard 的参数接口
 */
export interface QueryGamificationGoalWizardDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationGoalWizardInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationGoalWizard 分页查询结果接口
 */
export interface GamificationGoalWizardPageResult {
  data: GamificationGoalWizard[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationGoalWizard API 响应接口
 */
export interface GamificationGoalWizardResponse {
  success: boolean;
  message: string;
  data?: GamificationGoalWizard | GamificationGoalWizard[] | GamificationGoalWizardPageResult;
  error?: string;
}
