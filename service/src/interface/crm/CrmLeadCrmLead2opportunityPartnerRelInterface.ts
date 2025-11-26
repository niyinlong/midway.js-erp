import { CrmLeadCrmLead2opportunityPartnerRel } from '../entity/crm/crm.crmleadcrmlead2opportunitypartnerrel.entity';

/**
 * CrmLeadCrmLead2opportunityPartnerRel 实体接口
 * 对应数据库表: crm_lead_crm_lead2opportunity_partner_rel
 */
export interface CrmLeadCrmLead2opportunityPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLeadCrmLead2opportunityPartnerRel 的参数接口
 */
export interface CreateCrmLeadCrmLead2opportunityPartnerRelDTO extends Partial<CrmLeadCrmLead2opportunityPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLeadCrmLead2opportunityPartnerRel 的参数接口
 */
export interface UpdateCrmLeadCrmLead2opportunityPartnerRelDTO extends Partial<CrmLeadCrmLead2opportunityPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLeadCrmLead2opportunityPartnerRel 的参数接口
 */
export interface QueryCrmLeadCrmLead2opportunityPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLeadCrmLead2opportunityPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLeadCrmLead2opportunityPartnerRel 分页查询结果接口
 */
export interface CrmLeadCrmLead2opportunityPartnerRelPageResult {
  data: CrmLeadCrmLead2opportunityPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLeadCrmLead2opportunityPartnerRel API 响应接口
 */
export interface CrmLeadCrmLead2opportunityPartnerRelResponse {
  success: boolean;
  message: string;
  data?: CrmLeadCrmLead2opportunityPartnerRel | CrmLeadCrmLead2opportunityPartnerRel[] | CrmLeadCrmLead2opportunityPartnerRelPageResult;
  error?: string;
}
