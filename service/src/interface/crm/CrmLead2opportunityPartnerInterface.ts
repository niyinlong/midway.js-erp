import { CrmLead2opportunityPartner } from '../entity/crm/crm.crmlead2opportunitypartner.entity';

/**
 * CrmLead2opportunityPartner 实体接口
 * 对应数据库表: crm_lead2opportunity_partner
 */
export interface CrmLead2opportunityPartnerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLead2opportunityPartner 的参数接口
 */
export interface CreateCrmLead2opportunityPartnerDTO extends Partial<CrmLead2opportunityPartnerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLead2opportunityPartner 的参数接口
 */
export interface UpdateCrmLead2opportunityPartnerDTO extends Partial<CrmLead2opportunityPartnerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLead2opportunityPartner 的参数接口
 */
export interface QueryCrmLead2opportunityPartnerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLead2opportunityPartnerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLead2opportunityPartner 分页查询结果接口
 */
export interface CrmLead2opportunityPartnerPageResult {
  data: CrmLead2opportunityPartner[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLead2opportunityPartner API 响应接口
 */
export interface CrmLead2opportunityPartnerResponse {
  success: boolean;
  message: string;
  data?: CrmLead2opportunityPartner | CrmLead2opportunityPartner[] | CrmLead2opportunityPartnerPageResult;
  error?: string;
}
