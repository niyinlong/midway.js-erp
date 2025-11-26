import { ResCountryGroup } from '../entity/res/res.rescountrygroup.entity';

/**
 * ResCountryGroup 实体接口
 * 对应数据库表: res_country_group
 */
export interface ResCountryGroupInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResCountryGroup 的参数接口
 */
export interface CreateResCountryGroupDTO extends Partial<ResCountryGroupInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResCountryGroup 的参数接口
 */
export interface UpdateResCountryGroupDTO extends Partial<ResCountryGroupInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResCountryGroup 的参数接口
 */
export interface QueryResCountryGroupDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResCountryGroupInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResCountryGroup 分页查询结果接口
 */
export interface ResCountryGroupPageResult {
  data: ResCountryGroup[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResCountryGroup API 响应接口
 */
export interface ResCountryGroupResponse {
  success: boolean;
  message: string;
  data?: ResCountryGroup | ResCountryGroup[] | ResCountryGroupPageResult;
  error?: string;
}
