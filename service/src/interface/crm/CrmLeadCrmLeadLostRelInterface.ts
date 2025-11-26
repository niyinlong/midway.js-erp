import { CrmLeadCrmLeadLostRel } from '../entity/crm/crm.crmleadcrmleadlostrel.entity';

/**
 * CrmLeadCrmLeadLostRel 实体接口
 * 对应数据库表: crm_lead_crm_lead_lost_rel
 */
export interface CrmLeadCrmLeadLostRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLeadCrmLeadLostRel 的参数接口
 */
export interface CreateCrmLeadCrmLeadLostRelDTO extends Partial<CrmLeadCrmLeadLostRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLeadCrmLeadLostRel 的参数接口
 */
export interface UpdateCrmLeadCrmLeadLostRelDTO extends Partial<CrmLeadCrmLeadLostRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLeadCrmLeadLostRel 的参数接口
 */
export interface QueryCrmLeadCrmLeadLostRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLeadCrmLeadLostRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLeadCrmLeadLostRel 分页查询结果接口
 */
export interface CrmLeadCrmLeadLostRelPageResult {
  data: CrmLeadCrmLeadLostRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLeadCrmLeadLostRel API 响应接口
 */
export interface CrmLeadCrmLeadLostRelResponse {
  success: boolean;
  message: string;
  data?: CrmLeadCrmLeadLostRel | CrmLeadCrmLeadLostRel[] | CrmLeadCrmLeadLostRelPageResult;
  error?: string;
}
