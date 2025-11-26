import { CrmLead2opportunityPartnerMassResUsersRel } from '../entity/crm/crm.crmlead2opportunitypartnermassresusersrel.entity';

/**
 * CrmLead2opportunityPartnerMassResUsersRel 实体接口
 * 对应数据库表: crm_lead2opportunity_partner_mass_res_users_rel
 */
export interface CrmLead2opportunityPartnerMassResUsersRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLead2opportunityPartnerMassResUsersRel 的参数接口
 */
export interface CreateCrmLead2opportunityPartnerMassResUsersRelDTO extends Partial<CrmLead2opportunityPartnerMassResUsersRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLead2opportunityPartnerMassResUsersRel 的参数接口
 */
export interface UpdateCrmLead2opportunityPartnerMassResUsersRelDTO extends Partial<CrmLead2opportunityPartnerMassResUsersRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLead2opportunityPartnerMassResUsersRel 的参数接口
 */
export interface QueryCrmLead2opportunityPartnerMassResUsersRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLead2opportunityPartnerMassResUsersRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLead2opportunityPartnerMassResUsersRel 分页查询结果接口
 */
export interface CrmLead2opportunityPartnerMassResUsersRelPageResult {
  data: CrmLead2opportunityPartnerMassResUsersRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLead2opportunityPartnerMassResUsersRel API 响应接口
 */
export interface CrmLead2opportunityPartnerMassResUsersRelResponse {
  success: boolean;
  message: string;
  data?: CrmLead2opportunityPartnerMassResUsersRel | CrmLead2opportunityPartnerMassResUsersRel[] | CrmLead2opportunityPartnerMassResUsersRelPageResult;
  error?: string;
}
