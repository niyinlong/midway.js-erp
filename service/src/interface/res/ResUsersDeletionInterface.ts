import { ResUsersDeletion } from '../entity/res/res.resusersdeletion.entity';

/**
 * ResUsersDeletion 实体接口
 * 对应数据库表: res_users_deletion
 */
export interface ResUsersDeletionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResUsersDeletion 的参数接口
 */
export interface CreateResUsersDeletionDTO extends Partial<ResUsersDeletionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResUsersDeletion 的参数接口
 */
export interface UpdateResUsersDeletionDTO extends Partial<ResUsersDeletionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResUsersDeletion 的参数接口
 */
export interface QueryResUsersDeletionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResUsersDeletionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResUsersDeletion 分页查询结果接口
 */
export interface ResUsersDeletionPageResult {
  data: ResUsersDeletion[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResUsersDeletion API 响应接口
 */
export interface ResUsersDeletionResponse {
  success: boolean;
  message: string;
  data?: ResUsersDeletion | ResUsersDeletion[] | ResUsersDeletionPageResult;
  error?: string;
}
