import { CrmIapLeadMiningRequestCrmTagRel } from '../entity/crm/crm.crmiapleadminingrequestcrmtagrel.entity';

/**
 * CrmIapLeadMiningRequestCrmTagRel 实体接口
 * 对应数据库表: crm_iap_lead_mining_request_crm_tag_rel
 */
export interface CrmIapLeadMiningRequestCrmTagRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmIapLeadMiningRequestCrmTagRel 的参数接口
 */
export interface CreateCrmIapLeadMiningRequestCrmTagRelDTO extends Partial<CrmIapLeadMiningRequestCrmTagRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmIapLeadMiningRequestCrmTagRel 的参数接口
 */
export interface UpdateCrmIapLeadMiningRequestCrmTagRelDTO extends Partial<CrmIapLeadMiningRequestCrmTagRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmIapLeadMiningRequestCrmTagRel 的参数接口
 */
export interface QueryCrmIapLeadMiningRequestCrmTagRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmIapLeadMiningRequestCrmTagRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmIapLeadMiningRequestCrmTagRel 分页查询结果接口
 */
export interface CrmIapLeadMiningRequestCrmTagRelPageResult {
  data: CrmIapLeadMiningRequestCrmTagRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmIapLeadMiningRequestCrmTagRel API 响应接口
 */
export interface CrmIapLeadMiningRequestCrmTagRelResponse {
  success: boolean;
  message: string;
  data?: CrmIapLeadMiningRequestCrmTagRel | CrmIapLeadMiningRequestCrmTagRel[] | CrmIapLeadMiningRequestCrmTagRelPageResult;
  error?: string;
}
