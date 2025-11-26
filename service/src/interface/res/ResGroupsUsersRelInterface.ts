import { ResGroupsUsersRel } from '../entity/res/res.resgroupsusersrel.entity';

/**
 * ResGroupsUsersRel 实体接口
 * 对应数据库表: res_groups_users_rel
 */
export interface ResGroupsUsersRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResGroupsUsersRel 的参数接口
 */
export interface CreateResGroupsUsersRelDTO extends Partial<ResGroupsUsersRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResGroupsUsersRel 的参数接口
 */
export interface UpdateResGroupsUsersRelDTO extends Partial<ResGroupsUsersRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResGroupsUsersRel 的参数接口
 */
export interface QueryResGroupsUsersRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResGroupsUsersRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResGroupsUsersRel 分页查询结果接口
 */
export interface ResGroupsUsersRelPageResult {
  data: ResGroupsUsersRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResGroupsUsersRel API 响应接口
 */
export interface ResGroupsUsersRelResponse {
  success: boolean;
  message: string;
  data?: ResGroupsUsersRel | ResGroupsUsersRel[] | ResGroupsUsersRelPageResult;
  error?: string;
}
