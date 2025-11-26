import { ResRoleResUsersRel } from '../entity/res/res.resroleresusersrel.entity';

/**
 * ResRoleResUsersRel 实体接口
 * 对应数据库表: res_role_res_users_rel
 */
export interface ResRoleResUsersRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResRoleResUsersRel 的参数接口
 */
export interface CreateResRoleResUsersRelDTO extends Partial<ResRoleResUsersRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResRoleResUsersRel 的参数接口
 */
export interface UpdateResRoleResUsersRelDTO extends Partial<ResRoleResUsersRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResRoleResUsersRel 的参数接口
 */
export interface QueryResRoleResUsersRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResRoleResUsersRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResRoleResUsersRel 分页查询结果接口
 */
export interface ResRoleResUsersRelPageResult {
  data: ResRoleResUsersRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResRoleResUsersRel API 响应接口
 */
export interface ResRoleResUsersRelResponse {
  success: boolean;
  message: string;
  data?: ResRoleResUsersRel | ResRoleResUsersRel[] | ResRoleResUsersRelPageResult;
  error?: string;
}
