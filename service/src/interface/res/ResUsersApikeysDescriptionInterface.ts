import { ResUsersApikeysDescription } from '../entity/res/res.resusersapikeysdescription.entity';

/**
 * ResUsersApikeysDescription 实体接口
 * 对应数据库表: res_users_apikeys_description
 */
export interface ResUsersApikeysDescriptionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResUsersApikeysDescription 的参数接口
 */
export interface CreateResUsersApikeysDescriptionDTO extends Partial<ResUsersApikeysDescriptionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResUsersApikeysDescription 的参数接口
 */
export interface UpdateResUsersApikeysDescriptionDTO extends Partial<ResUsersApikeysDescriptionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResUsersApikeysDescription 的参数接口
 */
export interface QueryResUsersApikeysDescriptionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResUsersApikeysDescriptionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResUsersApikeysDescription 分页查询结果接口
 */
export interface ResUsersApikeysDescriptionPageResult {
  data: ResUsersApikeysDescription[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResUsersApikeysDescription API 响应接口
 */
export interface ResUsersApikeysDescriptionResponse {
  success: boolean;
  message: string;
  data?: ResUsersApikeysDescription | ResUsersApikeysDescription[] | ResUsersApikeysDescriptionPageResult;
  error?: string;
}
