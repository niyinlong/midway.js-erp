import { CrmLeadCrmLead2opportunityPartnerMassRel } from '../entity/crm/crm.crmleadcrmlead2opportunitypartnermassrel.entity';

/**
 * CrmLeadCrmLead2opportunityPartnerMassRel 实体接口
 * 对应数据库表: crm_lead_crm_lead2opportunity_partner_mass_rel
 */
export interface CrmLeadCrmLead2opportunityPartnerMassRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLeadCrmLead2opportunityPartnerMassRel 的参数接口
 */
export interface CreateCrmLeadCrmLead2opportunityPartnerMassRelDTO extends Partial<CrmLeadCrmLead2opportunityPartnerMassRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLeadCrmLead2opportunityPartnerMassRel 的参数接口
 */
export interface UpdateCrmLeadCrmLead2opportunityPartnerMassRelDTO extends Partial<CrmLeadCrmLead2opportunityPartnerMassRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLeadCrmLead2opportunityPartnerMassRel 的参数接口
 */
export interface QueryCrmLeadCrmLead2opportunityPartnerMassRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLeadCrmLead2opportunityPartnerMassRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLeadCrmLead2opportunityPartnerMassRel 分页查询结果接口
 */
export interface CrmLeadCrmLead2opportunityPartnerMassRelPageResult {
  data: CrmLeadCrmLead2opportunityPartnerMassRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLeadCrmLead2opportunityPartnerMassRel API 响应接口
 */
export interface CrmLeadCrmLead2opportunityPartnerMassRelResponse {
  success: boolean;
  message: string;
  data?: CrmLeadCrmLead2opportunityPartnerMassRel | CrmLeadCrmLead2opportunityPartnerMassRel[] | CrmLeadCrmLead2opportunityPartnerMassRelPageResult;
  error?: string;
}
