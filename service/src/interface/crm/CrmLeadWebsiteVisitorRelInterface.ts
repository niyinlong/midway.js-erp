import { CrmLeadWebsiteVisitorRel } from '../entity/crm/crm.crmleadwebsitevisitorrel.entity';

/**
 * CrmLeadWebsiteVisitorRel 实体接口
 * 对应数据库表: crm_lead_website_visitor_rel
 */
export interface CrmLeadWebsiteVisitorRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLeadWebsiteVisitorRel 的参数接口
 */
export interface CreateCrmLeadWebsiteVisitorRelDTO extends Partial<CrmLeadWebsiteVisitorRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLeadWebsiteVisitorRel 的参数接口
 */
export interface UpdateCrmLeadWebsiteVisitorRelDTO extends Partial<CrmLeadWebsiteVisitorRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLeadWebsiteVisitorRel 的参数接口
 */
export interface QueryCrmLeadWebsiteVisitorRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLeadWebsiteVisitorRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLeadWebsiteVisitorRel 分页查询结果接口
 */
export interface CrmLeadWebsiteVisitorRelPageResult {
  data: CrmLeadWebsiteVisitorRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLeadWebsiteVisitorRel API 响应接口
 */
export interface CrmLeadWebsiteVisitorRelResponse {
  success: boolean;
  message: string;
  data?: CrmLeadWebsiteVisitorRel | CrmLeadWebsiteVisitorRel[] | CrmLeadWebsiteVisitorRelPageResult;
  error?: string;
}
