import { RelBadgeAuthUsers } from '../entity/rel/rel.relbadgeauthusers.entity';

/**
 * RelBadgeAuthUsers 实体接口
 * 对应数据库表: rel_badge_auth_users
 */
export interface RelBadgeAuthUsersInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 RelBadgeAuthUsers 的参数接口
 */
export interface CreateRelBadgeAuthUsersDTO extends Partial<RelBadgeAuthUsersInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 RelBadgeAuthUsers 的参数接口
 */
export interface UpdateRelBadgeAuthUsersDTO extends Partial<RelBadgeAuthUsersInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 RelBadgeAuthUsers 的参数接口
 */
export interface QueryRelBadgeAuthUsersDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof RelBadgeAuthUsersInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * RelBadgeAuthUsers 分页查询结果接口
 */
export interface RelBadgeAuthUsersPageResult {
  data: RelBadgeAuthUsers[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * RelBadgeAuthUsers API 响应接口
 */
export interface RelBadgeAuthUsersResponse {
  success: boolean;
  message: string;
  data?: RelBadgeAuthUsers | RelBadgeAuthUsers[] | RelBadgeAuthUsersPageResult;
  error?: string;
}
