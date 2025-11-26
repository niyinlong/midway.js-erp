import { CrmIapLeadIndustryCrmIapLeadMiningRequestRel } from '../entity/crm/crm.crmiapleadindustrycrmiapleadminingrequestrel.entity';

/**
 * CrmIapLeadIndustryCrmIapLeadMiningRequestRel 实体接口
 * 对应数据库表: crm_iap_lead_industry_crm_iap_lead_mining_request_rel
 */
export interface CrmIapLeadIndustryCrmIapLeadMiningRequestRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmIapLeadIndustryCrmIapLeadMiningRequestRel 的参数接口
 */
export interface CreateCrmIapLeadIndustryCrmIapLeadMiningRequestRelDTO extends Partial<CrmIapLeadIndustryCrmIapLeadMiningRequestRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmIapLeadIndustryCrmIapLeadMiningRequestRel 的参数接口
 */
export interface UpdateCrmIapLeadIndustryCrmIapLeadMiningRequestRelDTO extends Partial<CrmIapLeadIndustryCrmIapLeadMiningRequestRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmIapLeadIndustryCrmIapLeadMiningRequestRel 的参数接口
 */
export interface QueryCrmIapLeadIndustryCrmIapLeadMiningRequestRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmIapLeadIndustryCrmIapLeadMiningRequestRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmIapLeadIndustryCrmIapLeadMiningRequestRel 分页查询结果接口
 */
export interface CrmIapLeadIndustryCrmIapLeadMiningRequestRelPageResult {
  data: CrmIapLeadIndustryCrmIapLeadMiningRequestRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmIapLeadIndustryCrmIapLeadMiningRequestRel API 响应接口
 */
export interface CrmIapLeadIndustryCrmIapLeadMiningRequestRelResponse {
  success: boolean;
  message: string;
  data?: CrmIapLeadIndustryCrmIapLeadMiningRequestRel | CrmIapLeadIndustryCrmIapLeadMiningRequestRel[] | CrmIapLeadIndustryCrmIapLeadMiningRequestRelPageResult;
  error?: string;
}
