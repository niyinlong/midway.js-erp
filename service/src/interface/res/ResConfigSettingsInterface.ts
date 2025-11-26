import { ResConfigSettings } from '../entity/res/res.resconfigsettings.entity';

/**
 * ResConfigSettings 实体接口
 * 对应数据库表: res_config_settings
 */
export interface ResConfigSettingsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResConfigSettings 的参数接口
 */
export interface CreateResConfigSettingsDTO extends Partial<ResConfigSettingsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResConfigSettings 的参数接口
 */
export interface UpdateResConfigSettingsDTO extends Partial<ResConfigSettingsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResConfigSettings 的参数接口
 */
export interface QueryResConfigSettingsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResConfigSettingsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResConfigSettings 分页查询结果接口
 */
export interface ResConfigSettingsPageResult {
  data: ResConfigSettings[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResConfigSettings API 响应接口
 */
export interface ResConfigSettingsResponse {
  success: boolean;
  message: string;
  data?: ResConfigSettings | ResConfigSettings[] | ResConfigSettingsPageResult;
  error?: string;
}
