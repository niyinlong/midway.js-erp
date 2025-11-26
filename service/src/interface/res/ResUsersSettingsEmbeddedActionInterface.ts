import { ResUsersSettingsEmbeddedAction } from '../entity/res/res.resuserssettingsembeddedaction.entity';

/**
 * ResUsersSettingsEmbeddedAction 实体接口
 * 对应数据库表: res_users_settings_embedded_action
 */
export interface ResUsersSettingsEmbeddedActionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResUsersSettingsEmbeddedAction 的参数接口
 */
export interface CreateResUsersSettingsEmbeddedActionDTO extends Partial<ResUsersSettingsEmbeddedActionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResUsersSettingsEmbeddedAction 的参数接口
 */
export interface UpdateResUsersSettingsEmbeddedActionDTO extends Partial<ResUsersSettingsEmbeddedActionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResUsersSettingsEmbeddedAction 的参数接口
 */
export interface QueryResUsersSettingsEmbeddedActionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResUsersSettingsEmbeddedActionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResUsersSettingsEmbeddedAction 分页查询结果接口
 */
export interface ResUsersSettingsEmbeddedActionPageResult {
  data: ResUsersSettingsEmbeddedAction[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResUsersSettingsEmbeddedAction API 响应接口
 */
export interface ResUsersSettingsEmbeddedActionResponse {
  success: boolean;
  message: string;
  data?: ResUsersSettingsEmbeddedAction | ResUsersSettingsEmbeddedAction[] | ResUsersSettingsEmbeddedActionPageResult;
  error?: string;
}
