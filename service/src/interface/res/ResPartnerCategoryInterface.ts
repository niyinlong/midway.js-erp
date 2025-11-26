import { ResPartnerCategory } from '../entity/res/res.respartnercategory.entity';

/**
 * ResPartnerCategory 实体接口
 * 对应数据库表: res_partner_category
 */
export interface ResPartnerCategoryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResPartnerCategory 的参数接口
 */
export interface CreateResPartnerCategoryDTO extends Partial<ResPartnerCategoryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResPartnerCategory 的参数接口
 */
export interface UpdateResPartnerCategoryDTO extends Partial<ResPartnerCategoryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResPartnerCategory 的参数接口
 */
export interface QueryResPartnerCategoryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResPartnerCategoryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResPartnerCategory 分页查询结果接口
 */
export interface ResPartnerCategoryPageResult {
  data: ResPartnerCategory[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResPartnerCategory API 响应接口
 */
export interface ResPartnerCategoryResponse {
  success: boolean;
  message: string;
  data?: ResPartnerCategory | ResPartnerCategory[] | ResPartnerCategoryPageResult;
  error?: string;
}
