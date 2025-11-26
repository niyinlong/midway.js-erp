import { CrmIapLeadMiningRequestResCountryStateRel } from '../entity/crm/crm.crmiapleadminingrequestrescountrystaterel.entity';

/**
 * CrmIapLeadMiningRequestResCountryStateRel 实体接口
 * 对应数据库表: crm_iap_lead_mining_request_res_country_state_rel
 */
export interface CrmIapLeadMiningRequestResCountryStateRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmIapLeadMiningRequestResCountryStateRel 的参数接口
 */
export interface CreateCrmIapLeadMiningRequestResCountryStateRelDTO extends Partial<CrmIapLeadMiningRequestResCountryStateRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmIapLeadMiningRequestResCountryStateRel 的参数接口
 */
export interface UpdateCrmIapLeadMiningRequestResCountryStateRelDTO extends Partial<CrmIapLeadMiningRequestResCountryStateRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmIapLeadMiningRequestResCountryStateRel 的参数接口
 */
export interface QueryCrmIapLeadMiningRequestResCountryStateRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmIapLeadMiningRequestResCountryStateRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmIapLeadMiningRequestResCountryStateRel 分页查询结果接口
 */
export interface CrmIapLeadMiningRequestResCountryStateRelPageResult {
  data: CrmIapLeadMiningRequestResCountryStateRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmIapLeadMiningRequestResCountryStateRel API 响应接口
 */
export interface CrmIapLeadMiningRequestResCountryStateRelResponse {
  success: boolean;
  message: string;
  data?: CrmIapLeadMiningRequestResCountryStateRel | CrmIapLeadMiningRequestResCountryStateRel[] | CrmIapLeadMiningRequestResCountryStateRelPageResult;
  error?: string;
}
