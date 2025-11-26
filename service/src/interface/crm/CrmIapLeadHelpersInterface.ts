import { CrmIapLeadHelpers } from '../entity/crm/crm.crmiapleadhelpers.entity';

/**
 * CrmIapLeadHelpers 实体接口
 * 对应数据库表: crm_iap_lead_helpers
 */
export interface CrmIapLeadHelpersInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmIapLeadHelpers 的参数接口
 */
export interface CreateCrmIapLeadHelpersDTO extends Partial<CrmIapLeadHelpersInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmIapLeadHelpers 的参数接口
 */
export interface UpdateCrmIapLeadHelpersDTO extends Partial<CrmIapLeadHelpersInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmIapLeadHelpers 的参数接口
 */
export interface QueryCrmIapLeadHelpersDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmIapLeadHelpersInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmIapLeadHelpers 分页查询结果接口
 */
export interface CrmIapLeadHelpersPageResult {
  data: CrmIapLeadHelpers[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmIapLeadHelpers API 响应接口
 */
export interface CrmIapLeadHelpersResponse {
  success: boolean;
  message: string;
  data?: CrmIapLeadHelpers | CrmIapLeadHelpers[] | CrmIapLeadHelpersPageResult;
  error?: string;
}
