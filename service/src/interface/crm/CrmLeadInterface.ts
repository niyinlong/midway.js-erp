import { CrmLead } from '../entity/crm/crm.crmlead.entity';

/**
 * CrmLead 实体接口
 * 对应数据库表: crm_lead
 */
export interface CrmLeadInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLead 的参数接口
 */
export interface CreateCrmLeadDTO extends Partial<CrmLeadInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLead 的参数接口
 */
export interface UpdateCrmLeadDTO extends Partial<CrmLeadInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLead 的参数接口
 */
export interface QueryCrmLeadDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLeadInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLead 分页查询结果接口
 */
export interface CrmLeadPageResult {
  data: CrmLead[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLead API 响应接口
 */
export interface CrmLeadResponse {
  success: boolean;
  message: string;
  data?: CrmLead | CrmLead[] | CrmLeadPageResult;
  error?: string;
}
