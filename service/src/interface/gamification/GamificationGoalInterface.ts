import { GamificationGoal } from '../entity/gamification/gamification.gamificationgoal.entity';

/**
 * GamificationGoal 实体接口
 * 对应数据库表: gamification_goal
 */
export interface GamificationGoalInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationGoal 的参数接口
 */
export interface CreateGamificationGoalDTO extends Partial<GamificationGoalInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationGoal 的参数接口
 */
export interface UpdateGamificationGoalDTO extends Partial<GamificationGoalInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationGoal 的参数接口
 */
export interface QueryGamificationGoalDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationGoalInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationGoal 分页查询结果接口
 */
export interface GamificationGoalPageResult {
  data: GamificationGoal[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationGoal API 响应接口
 */
export interface GamificationGoalResponse {
  success: boolean;
  message: string;
  data?: GamificationGoal | GamificationGoal[] | GamificationGoalPageResult;
  error?: string;
}
