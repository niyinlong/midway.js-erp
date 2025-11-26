import { CrmLead2opportunityPartnerMass } from '../entity/crm/crm.crmlead2opportunitypartnermass.entity';

/**
 * CrmLead2opportunityPartnerMass 实体接口
 * 对应数据库表: crm_lead2opportunity_partner_mass
 */
export interface CrmLead2opportunityPartnerMassInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLead2opportunityPartnerMass 的参数接口
 */
export interface CreateCrmLead2opportunityPartnerMassDTO extends Partial<CrmLead2opportunityPartnerMassInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLead2opportunityPartnerMass 的参数接口
 */
export interface UpdateCrmLead2opportunityPartnerMassDTO extends Partial<CrmLead2opportunityPartnerMassInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLead2opportunityPartnerMass 的参数接口
 */
export interface QueryCrmLead2opportunityPartnerMassDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLead2opportunityPartnerMassInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLead2opportunityPartnerMass 分页查询结果接口
 */
export interface CrmLead2opportunityPartnerMassPageResult {
  data: CrmLead2opportunityPartnerMass[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLead2opportunityPartnerMass API 响应接口
 */
export interface CrmLead2opportunityPartnerMassResponse {
  success: boolean;
  message: string;
  data?: CrmLead2opportunityPartnerMass | CrmLead2opportunityPartnerMass[] | CrmLead2opportunityPartnerMassPageResult;
  error?: string;
}
