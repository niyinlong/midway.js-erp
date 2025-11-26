import { ResCountryGroupPricelistRel } from '../entity/res/res.rescountrygrouppricelistrel.entity';

/**
 * ResCountryGroupPricelistRel 实体接口
 * 对应数据库表: res_country_group_pricelist_rel
 */
export interface ResCountryGroupPricelistRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResCountryGroupPricelistRel 的参数接口
 */
export interface CreateResCountryGroupPricelistRelDTO extends Partial<ResCountryGroupPricelistRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResCountryGroupPricelistRel 的参数接口
 */
export interface UpdateResCountryGroupPricelistRelDTO extends Partial<ResCountryGroupPricelistRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResCountryGroupPricelistRel 的参数接口
 */
export interface QueryResCountryGroupPricelistRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResCountryGroupPricelistRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResCountryGroupPricelistRel 分页查询结果接口
 */
export interface ResCountryGroupPricelistRelPageResult {
  data: ResCountryGroupPricelistRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResCountryGroupPricelistRel API 响应接口
 */
export interface ResCountryGroupPricelistRelResponse {
  success: boolean;
  message: string;
  data?: ResCountryGroupPricelistRel | ResCountryGroupPricelistRel[] | ResCountryGroupPricelistRelPageResult;
  error?: string;
}
