import { ResUsersLog } from '../entity/res/res.resuserslog.entity';

/**
 * ResUsersLog 实体接口
 * 对应数据库表: res_users_log
 */
export interface ResUsersLogInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResUsersLog 的参数接口
 */
export interface CreateResUsersLogDTO extends Partial<ResUsersLogInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResUsersLog 的参数接口
 */
export interface UpdateResUsersLogDTO extends Partial<ResUsersLogInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResUsersLog 的参数接口
 */
export interface QueryResUsersLogDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResUsersLogInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResUsersLog 分页查询结果接口
 */
export interface ResUsersLogPageResult {
  data: ResUsersLog[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResUsersLog API 响应接口
 */
export interface ResUsersLogResponse {
  success: boolean;
  message: string;
  data?: ResUsersLog | ResUsersLog[] | ResUsersLogPageResult;
  error?: string;
}
