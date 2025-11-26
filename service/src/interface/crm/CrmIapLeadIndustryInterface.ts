import { CrmIapLeadIndustry } from '../entity/crm/crm.crmiapleadindustry.entity';

/**
 * CrmIapLeadIndustry 实体接口
 * 对应数据库表: crm_iap_lead_industry
 */
export interface CrmIapLeadIndustryInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmIapLeadIndustry 的参数接口
 */
export interface CreateCrmIapLeadIndustryDTO extends Partial<CrmIapLeadIndustryInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmIapLeadIndustry 的参数接口
 */
export interface UpdateCrmIapLeadIndustryDTO extends Partial<CrmIapLeadIndustryInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmIapLeadIndustry 的参数接口
 */
export interface QueryCrmIapLeadIndustryDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmIapLeadIndustryInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmIapLeadIndustry 分页查询结果接口
 */
export interface CrmIapLeadIndustryPageResult {
  data: CrmIapLeadIndustry[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmIapLeadIndustry API 响应接口
 */
export interface CrmIapLeadIndustryResponse {
  success: boolean;
  message: string;
  data?: CrmIapLeadIndustry | CrmIapLeadIndustry[] | CrmIapLeadIndustryPageResult;
  error?: string;
}
