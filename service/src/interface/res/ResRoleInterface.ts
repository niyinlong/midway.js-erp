import { ResRole } from '../entity/res/res.resrole.entity';

/**
 * ResRole 实体接口
 * 对应数据库表: res_role
 */
export interface ResRoleInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResRole 的参数接口
 */
export interface CreateResRoleDTO extends Partial<ResRoleInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResRole 的参数接口
 */
export interface UpdateResRoleDTO extends Partial<ResRoleInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResRole 的参数接口
 */
export interface QueryResRoleDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResRoleInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResRole 分页查询结果接口
 */
export interface ResRolePageResult {
  data: ResRole[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResRole API 响应接口
 */
export interface ResRoleResponse {
  success: boolean;
  message: string;
  data?: ResRole | ResRole[] | ResRolePageResult;
  error?: string;
}
