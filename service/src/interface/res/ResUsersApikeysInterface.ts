import { ResUsersApikeys } from '../entity/res/res.resusersapikeys.entity';

/**
 * ResUsersApikeys 实体接口
 * 对应数据库表: res_users_apikeys
 */
export interface ResUsersApikeysInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResUsersApikeys 的参数接口
 */
export interface CreateResUsersApikeysDTO extends Partial<ResUsersApikeysInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResUsersApikeys 的参数接口
 */
export interface UpdateResUsersApikeysDTO extends Partial<ResUsersApikeysInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResUsersApikeys 的参数接口
 */
export interface QueryResUsersApikeysDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResUsersApikeysInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResUsersApikeys 分页查询结果接口
 */
export interface ResUsersApikeysPageResult {
  data: ResUsersApikeys[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResUsersApikeys API 响应接口
 */
export interface ResUsersApikeysResponse {
  success: boolean;
  message: string;
  data?: ResUsersApikeys | ResUsersApikeys[] | ResUsersApikeysPageResult;
  error?: string;
}
