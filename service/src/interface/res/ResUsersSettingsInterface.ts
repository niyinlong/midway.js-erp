import { ResUsersSettings } from '../entity/res/res.resuserssettings.entity';

/**
 * ResUsersSettings 实体接口
 * 对应数据库表: res_users_settings
 */
export interface ResUsersSettingsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResUsersSettings 的参数接口
 */
export interface CreateResUsersSettingsDTO extends Partial<ResUsersSettingsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResUsersSettings 的参数接口
 */
export interface UpdateResUsersSettingsDTO extends Partial<ResUsersSettingsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResUsersSettings 的参数接口
 */
export interface QueryResUsersSettingsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResUsersSettingsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResUsersSettings 分页查询结果接口
 */
export interface ResUsersSettingsPageResult {
  data: ResUsersSettings[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResUsersSettings API 响应接口
 */
export interface ResUsersSettingsResponse {
  success: boolean;
  message: string;
  data?: ResUsersSettings | ResUsersSettings[] | ResUsersSettingsPageResult;
  error?: string;
}
