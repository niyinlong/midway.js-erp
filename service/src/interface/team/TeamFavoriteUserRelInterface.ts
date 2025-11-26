import { TeamFavoriteUserRel } from '../entity/team/team.teamfavoriteuserrel.entity';

/**
 * TeamFavoriteUserRel 实体接口
 * 对应数据库表: team_favorite_user_rel
 */
export interface TeamFavoriteUserRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 TeamFavoriteUserRel 的参数接口
 */
export interface CreateTeamFavoriteUserRelDTO extends Partial<TeamFavoriteUserRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 TeamFavoriteUserRel 的参数接口
 */
export interface UpdateTeamFavoriteUserRelDTO extends Partial<TeamFavoriteUserRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 TeamFavoriteUserRel 的参数接口
 */
export interface QueryTeamFavoriteUserRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof TeamFavoriteUserRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * TeamFavoriteUserRel 分页查询结果接口
 */
export interface TeamFavoriteUserRelPageResult {
  data: TeamFavoriteUserRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * TeamFavoriteUserRel API 响应接口
 */
export interface TeamFavoriteUserRelResponse {
  success: boolean;
  message: string;
  data?: TeamFavoriteUserRel | TeamFavoriteUserRel[] | TeamFavoriteUserRelPageResult;
  error?: string;
}
