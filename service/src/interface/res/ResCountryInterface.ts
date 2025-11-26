import { ResCountry } from '../entity/res/res.rescountry.entity';

/**
 * ResCountry 实体接口
 * 对应数据库表: res_country
 */
export interface ResCountryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResCountry 的参数接口
 */
export interface CreateResCountryDTO extends Partial<ResCountryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResCountry 的参数接口
 */
export interface UpdateResCountryDTO extends Partial<ResCountryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResCountry 的参数接口
 */
export interface QueryResCountryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResCountryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResCountry 分页查询结果接口
 */
export interface ResCountryPageResult {
  data: ResCountry[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResCountry API 响应接口
 */
export interface ResCountryResponse {
  success: boolean;
  message: string;
  data?: ResCountry | ResCountry[] | ResCountryPageResult;
  error?: string;
}
