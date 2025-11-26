import { GamificationChallenge } from '../entity/gamification/gamification.gamificationchallenge.entity';

/**
 * GamificationChallenge 实体接口
 * 对应数据库表: gamification_challenge
 */
export interface GamificationChallengeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationChallenge 的参数接口
 */
export interface CreateGamificationChallengeDTO extends Partial<GamificationChallengeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationChallenge 的参数接口
 */
export interface UpdateGamificationChallengeDTO extends Partial<GamificationChallengeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationChallenge 的参数接口
 */
export interface QueryGamificationChallengeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationChallengeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationChallenge 分页查询结果接口
 */
export interface GamificationChallengePageResult {
  data: GamificationChallenge[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationChallenge API 响应接口
 */
export interface GamificationChallengeResponse {
  success: boolean;
  message: string;
  data?: GamificationChallenge | GamificationChallenge[] | GamificationChallengePageResult;
  error?: string;
}
