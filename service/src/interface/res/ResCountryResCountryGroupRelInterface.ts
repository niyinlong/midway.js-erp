import { ResCountryResCountryGroupRel } from '../entity/res/res.rescountryrescountrygrouprel.entity';

/**
 * ResCountryResCountryGroupRel 实体接口
 * 对应数据库表: res_country_res_country_group_rel
 */
export interface ResCountryResCountryGroupRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResCountryResCountryGroupRel 的参数接口
 */
export interface CreateResCountryResCountryGroupRelDTO extends Partial<ResCountryResCountryGroupRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResCountryResCountryGroupRel 的参数接口
 */
export interface UpdateResCountryResCountryGroupRelDTO extends Partial<ResCountryResCountryGroupRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResCountryResCountryGroupRel 的参数接口
 */
export interface QueryResCountryResCountryGroupRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResCountryResCountryGroupRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResCountryResCountryGroupRel 分页查询结果接口
 */
export interface ResCountryResCountryGroupRelPageResult {
  data: ResCountryResCountryGroupRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResCountryResCountryGroupRel API 响应接口
 */
export interface ResCountryResCountryGroupRelResponse {
  success: boolean;
  message: string;
  data?: ResCountryResCountryGroupRel | ResCountryResCountryGroupRel[] | ResCountryResCountryGroupRelPageResult;
  error?: string;
}
