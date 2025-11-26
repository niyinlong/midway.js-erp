import { ResPartnerResPartnerCategoryRel } from '../entity/res/res.respartnerrespartnercategoryrel.entity';

/**
 * ResPartnerResPartnerCategoryRel 实体接口
 * 对应数据库表: res_partner_res_partner_category_rel
 */
export interface ResPartnerResPartnerCategoryRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResPartnerResPartnerCategoryRel 的参数接口
 */
export interface CreateResPartnerResPartnerCategoryRelDTO extends Partial<ResPartnerResPartnerCategoryRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResPartnerResPartnerCategoryRel 的参数接口
 */
export interface UpdateResPartnerResPartnerCategoryRelDTO extends Partial<ResPartnerResPartnerCategoryRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResPartnerResPartnerCategoryRel 的参数接口
 */
export interface QueryResPartnerResPartnerCategoryRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResPartnerResPartnerCategoryRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResPartnerResPartnerCategoryRel 分页查询结果接口
 */
export interface ResPartnerResPartnerCategoryRelPageResult {
  data: ResPartnerResPartnerCategoryRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResPartnerResPartnerCategoryRel API 响应接口
 */
export interface ResPartnerResPartnerCategoryRelResponse {
  success: boolean;
  message: string;
  data?: ResPartnerResPartnerCategoryRel | ResPartnerResPartnerCategoryRel[] | ResPartnerResPartnerCategoryRelPageResult;
  error?: string;
}
