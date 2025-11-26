import { CrmIapLeadMiningRequest } from '../entity/crm/crm.crmiapleadminingrequest.entity';

/**
 * CrmIapLeadMiningRequest 实体接口
 * 对应数据库表: crm_iap_lead_mining_request
 */
export interface CrmIapLeadMiningRequestInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmIapLeadMiningRequest 的参数接口
 */
export interface CreateCrmIapLeadMiningRequestDTO extends Partial<CrmIapLeadMiningRequestInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmIapLeadMiningRequest 的参数接口
 */
export interface UpdateCrmIapLeadMiningRequestDTO extends Partial<CrmIapLeadMiningRequestInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmIapLeadMiningRequest 的参数接口
 */
export interface QueryCrmIapLeadMiningRequestDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmIapLeadMiningRequestInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmIapLeadMiningRequest 分页查询结果接口
 */
export interface CrmIapLeadMiningRequestPageResult {
  data: CrmIapLeadMiningRequest[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmIapLeadMiningRequest API 响应接口
 */
export interface CrmIapLeadMiningRequestResponse {
  success: boolean;
  message: string;
  data?: CrmIapLeadMiningRequest | CrmIapLeadMiningRequest[] | CrmIapLeadMiningRequestPageResult;
  error?: string;
}
