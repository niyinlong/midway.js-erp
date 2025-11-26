import { CrmIapLeadMiningRequestResCountryRel } from '../entity/crm/crm.crmiapleadminingrequestrescountryrel.entity';

/**
 * CrmIapLeadMiningRequestResCountryRel 实体接口
 * 对应数据库表: crm_iap_lead_mining_request_res_country_rel
 */
export interface CrmIapLeadMiningRequestResCountryRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmIapLeadMiningRequestResCountryRel 的参数接口
 */
export interface CreateCrmIapLeadMiningRequestResCountryRelDTO extends Partial<CrmIapLeadMiningRequestResCountryRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmIapLeadMiningRequestResCountryRel 的参数接口
 */
export interface UpdateCrmIapLeadMiningRequestResCountryRelDTO extends Partial<CrmIapLeadMiningRequestResCountryRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmIapLeadMiningRequestResCountryRel 的参数接口
 */
export interface QueryCrmIapLeadMiningRequestResCountryRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmIapLeadMiningRequestResCountryRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmIapLeadMiningRequestResCountryRel 分页查询结果接口
 */
export interface CrmIapLeadMiningRequestResCountryRelPageResult {
  data: CrmIapLeadMiningRequestResCountryRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmIapLeadMiningRequestResCountryRel API 响应接口
 */
export interface CrmIapLeadMiningRequestResCountryRelResponse {
  success: boolean;
  message: string;
  data?: CrmIapLeadMiningRequestResCountryRel | CrmIapLeadMiningRequestResCountryRel[] | CrmIapLeadMiningRequestResCountryRelPageResult;
  error?: string;
}
