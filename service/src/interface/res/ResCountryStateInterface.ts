import { ResCountryState } from '../entity/res/res.rescountrystate.entity';

/**
 * ResCountryState 实体接口
 * 对应数据库表: res_country_state
 */
export interface ResCountryStateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResCountryState 的参数接口
 */
export interface CreateResCountryStateDTO extends Partial<ResCountryStateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResCountryState 的参数接口
 */
export interface UpdateResCountryStateDTO extends Partial<ResCountryStateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResCountryState 的参数接口
 */
export interface QueryResCountryStateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResCountryStateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResCountryState 分页查询结果接口
 */
export interface ResCountryStatePageResult {
  data: ResCountryState[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResCountryState API 响应接口
 */
export interface ResCountryStateResponse {
  success: boolean;
  message: string;
  data?: ResCountryState | ResCountryState[] | ResCountryStatePageResult;
  error?: string;
}
