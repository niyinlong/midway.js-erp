import { ResPartnerIndustry } from '../entity/res/res.respartnerindustry.entity';

/**
 * ResPartnerIndustry 实体接口
 * 对应数据库表: res_partner_industry
 */
export interface ResPartnerIndustryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ResPartnerIndustry 的参数接口
 */
export interface CreateResPartnerIndustryDTO extends Partial<ResPartnerIndustryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ResPartnerIndustry 的参数接口
 */
export interface UpdateResPartnerIndustryDTO extends Partial<ResPartnerIndustryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ResPartnerIndustry 的参数接口
 */
export interface QueryResPartnerIndustryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ResPartnerIndustryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ResPartnerIndustry 分页查询结果接口
 */
export interface ResPartnerIndustryPageResult {
  data: ResPartnerIndustry[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ResPartnerIndustry API 响应接口
 */
export interface ResPartnerIndustryResponse {
  success: boolean;
  message: string;
  data?: ResPartnerIndustry | ResPartnerIndustry[] | ResPartnerIndustryPageResult;
  error?: string;
}
