import { ResGroups } from '../entity/res/res.resgroups.entity';

/**
 * ResGroups 实体接口
 * 对应数据库表: res_groups
 */
export interface ResGroupsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResGroups 的参数接口
 */
export interface CreateResGroupsDTO extends Partial<ResGroupsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResGroups 的参数接口
 */
export interface UpdateResGroupsDTO extends Partial<ResGroupsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResGroups 的参数接口
 */
export interface QueryResGroupsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResGroupsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResGroups 分页查询结果接口
 */
export interface ResGroupsPageResult {
  data: ResGroups[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResGroups API 响应接口
 */
export interface ResGroupsResponse {
  success: boolean;
  message: string;
  data?: ResGroups | ResGroups[] | ResGroupsPageResult;
  error?: string;
}
