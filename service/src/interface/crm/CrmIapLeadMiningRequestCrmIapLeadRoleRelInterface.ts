import { CrmIapLeadMiningRequestCrmIapLeadRoleRel } from '../entity/crm/crm.crmiapleadminingrequestcrmiapleadrolerel.entity';

/**
 * CrmIapLeadMiningRequestCrmIapLeadRoleRel 实体接口
 * 对应数据库表: crm_iap_lead_mining_request_crm_iap_lead_role_rel
 */
export interface CrmIapLeadMiningRequestCrmIapLeadRoleRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmIapLeadMiningRequestCrmIapLeadRoleRel 的参数接口
 */
export interface CreateCrmIapLeadMiningRequestCrmIapLeadRoleRelDTO extends Partial<CrmIapLeadMiningRequestCrmIapLeadRoleRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmIapLeadMiningRequestCrmIapLeadRoleRel 的参数接口
 */
export interface UpdateCrmIapLeadMiningRequestCrmIapLeadRoleRelDTO extends Partial<CrmIapLeadMiningRequestCrmIapLeadRoleRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmIapLeadMiningRequestCrmIapLeadRoleRel 的参数接口
 */
export interface QueryCrmIapLeadMiningRequestCrmIapLeadRoleRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmIapLeadMiningRequestCrmIapLeadRoleRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmIapLeadMiningRequestCrmIapLeadRoleRel 分页查询结果接口
 */
export interface CrmIapLeadMiningRequestCrmIapLeadRoleRelPageResult {
  data: CrmIapLeadMiningRequestCrmIapLeadRoleRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmIapLeadMiningRequestCrmIapLeadRoleRel API 响应接口
 */
export interface CrmIapLeadMiningRequestCrmIapLeadRoleRelResponse {
  success: boolean;
  message: string;
  data?: CrmIapLeadMiningRequestCrmIapLeadRoleRel | CrmIapLeadMiningRequestCrmIapLeadRoleRel[] | CrmIapLeadMiningRequestCrmIapLeadRoleRelPageResult;
  error?: string;
}
