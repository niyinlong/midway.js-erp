import { ResCountryGroupResCountryStateRel } from '../entity/res/res.rescountrygrouprescountrystaterel.entity';

/**
 * ResCountryGroupResCountryStateRel 实体接口
 * 对应数据库表: res_country_group_res_country_state_rel
 */
export interface ResCountryGroupResCountryStateRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResCountryGroupResCountryStateRel 的参数接口
 */
export interface CreateResCountryGroupResCountryStateRelDTO extends Partial<ResCountryGroupResCountryStateRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResCountryGroupResCountryStateRel 的参数接口
 */
export interface UpdateResCountryGroupResCountryStateRelDTO extends Partial<ResCountryGroupResCountryStateRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResCountryGroupResCountryStateRel 的参数接口
 */
export interface QueryResCountryGroupResCountryStateRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResCountryGroupResCountryStateRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResCountryGroupResCountryStateRel 分页查询结果接口
 */
export interface ResCountryGroupResCountryStateRelPageResult {
  data: ResCountryGroupResCountryStateRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResCountryGroupResCountryStateRel API 响应接口
 */
export interface ResCountryGroupResCountryStateRelResponse {
  success: boolean;
  message: string;
  data?: ResCountryGroupResCountryStateRel | ResCountryGroupResCountryStateRel[] | ResCountryGroupResCountryStateRelPageResult;
  error?: string;
}
