import { ResGroupsPrivilege } from '../entity/res/res.resgroupsprivilege.entity';

/**
 * ResGroupsPrivilege 实体接口
 * 对应数据库表: res_groups_privilege
 */
export interface ResGroupsPrivilegeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResGroupsPrivilege 的参数接口
 */
export interface CreateResGroupsPrivilegeDTO extends Partial<ResGroupsPrivilegeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResGroupsPrivilege 的参数接口
 */
export interface UpdateResGroupsPrivilegeDTO extends Partial<ResGroupsPrivilegeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResGroupsPrivilege 的参数接口
 */
export interface QueryResGroupsPrivilegeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResGroupsPrivilegeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResGroupsPrivilege 分页查询结果接口
 */
export interface ResGroupsPrivilegePageResult {
  data: ResGroupsPrivilege[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResGroupsPrivilege API 响应接口
 */
export interface ResGroupsPrivilegeResponse {
  success: boolean;
  message: string;
  data?: ResGroupsPrivilege | ResGroupsPrivilege[] | ResGroupsPrivilegePageResult;
  error?: string;
}
