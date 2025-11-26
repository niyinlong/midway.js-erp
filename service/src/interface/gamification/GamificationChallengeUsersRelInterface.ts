import { GamificationChallengeUsersRel } from '../entity/gamification/gamification.gamificationchallengeusersrel.entity';

/**
 * GamificationChallengeUsersRel 实体接口
 * 对应数据库表: gamification_challenge_users_rel
 */
export interface GamificationChallengeUsersRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationChallengeUsersRel 的参数接口
 */
export interface CreateGamificationChallengeUsersRelDTO extends Partial<GamificationChallengeUsersRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationChallengeUsersRel 的参数接口
 */
export interface UpdateGamificationChallengeUsersRelDTO extends Partial<GamificationChallengeUsersRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationChallengeUsersRel 的参数接口
 */
export interface QueryGamificationChallengeUsersRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationChallengeUsersRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationChallengeUsersRel 分页查询结果接口
 */
export interface GamificationChallengeUsersRelPageResult {
  data: GamificationChallengeUsersRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationChallengeUsersRel API 响应接口
 */
export interface GamificationChallengeUsersRelResponse {
  success: boolean;
  message: string;
  data?: GamificationChallengeUsersRel | GamificationChallengeUsersRel[] | GamificationChallengeUsersRelPageResult;
  error?: string;
}
