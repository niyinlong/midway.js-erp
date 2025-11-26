import { GamificationInvitedUserIdsRel } from '../entity/gamification/gamification.gamificationinviteduseridsrel.entity';

/**
 * GamificationInvitedUserIdsRel 实体接口
 * 对应数据库表: gamification_invited_user_ids_rel
 */
export interface GamificationInvitedUserIdsRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 GamificationInvitedUserIdsRel 的参数接口
 */
export interface CreateGamificationInvitedUserIdsRelDTO extends Partial<GamificationInvitedUserIdsRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 GamificationInvitedUserIdsRel 的参数接口
 */
export interface UpdateGamificationInvitedUserIdsRelDTO extends Partial<GamificationInvitedUserIdsRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 GamificationInvitedUserIdsRel 的参数接口
 */
export interface QueryGamificationInvitedUserIdsRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof GamificationInvitedUserIdsRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * GamificationInvitedUserIdsRel 分页查询结果接口
 */
export interface GamificationInvitedUserIdsRelPageResult {
  data: GamificationInvitedUserIdsRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * GamificationInvitedUserIdsRel API 响应接口
 */
export interface GamificationInvitedUserIdsRelResponse {
  success: boolean;
  message: string;
  data?: GamificationInvitedUserIdsRel | GamificationInvitedUserIdsRel[] | GamificationInvitedUserIdsRelPageResult;
  error?: string;
}
