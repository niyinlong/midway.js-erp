import { GamificationChallengeLine } from '../entity/gamification/gamification.gamificationchallengeline.entity';

/**
 * GamificationChallengeLine 实体接口
 * 对应数据库表: gamification_challenge_line
 */
export interface GamificationChallengeLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationChallengeLine 的参数接口
 */
export interface CreateGamificationChallengeLineDTO extends Partial<GamificationChallengeLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationChallengeLine 的参数接口
 */
export interface UpdateGamificationChallengeLineDTO extends Partial<GamificationChallengeLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationChallengeLine 的参数接口
 */
export interface QueryGamificationChallengeLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationChallengeLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationChallengeLine 分页查询结果接口
 */
export interface GamificationChallengeLinePageResult {
  data: GamificationChallengeLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationChallengeLine API 响应接口
 */
export interface GamificationChallengeLineResponse {
  success: boolean;
  message: string;
  data?: GamificationChallengeLine | GamificationChallengeLine[] | GamificationChallengeLinePageResult;
  error?: string;
}
