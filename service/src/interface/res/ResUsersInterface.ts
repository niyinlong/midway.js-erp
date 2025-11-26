import { ResUsers } from '../entity/res/res.resusers.entity';

/**
 * ResUsers 实体接口
 * 对应数据库表: res_users
 */
export interface ResUsersInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResUsers 的参数接口
 */
export interface CreateResUsersDTO extends Partial<ResUsersInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResUsers 的参数接口
 */
export interface UpdateResUsersDTO extends Partial<ResUsersInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResUsers 的参数接口
 */
export interface QueryResUsersDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResUsersInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResUsers 分页查询结果接口
 */
export interface ResUsersPageResult {
  data: ResUsers[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResUsers API 响应接口
 */
export interface ResUsersResponse {
  success: boolean;
  message: string;
  data?: ResUsers | ResUsers[] | ResUsersPageResult;
  error?: string;
}
