import { CrmLeadPlsUpdate } from '../entity/crm/crm.crmleadplsupdate.entity';

/**
 * CrmLeadPlsUpdate 实体接口
 * 对应数据库表: crm_lead_pls_update
 */
export interface CrmLeadPlsUpdateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLeadPlsUpdate 的参数接口
 */
export interface CreateCrmLeadPlsUpdateDTO extends Partial<CrmLeadPlsUpdateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLeadPlsUpdate 的参数接口
 */
export interface UpdateCrmLeadPlsUpdateDTO extends Partial<CrmLeadPlsUpdateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLeadPlsUpdate 的参数接口
 */
export interface QueryCrmLeadPlsUpdateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLeadPlsUpdateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLeadPlsUpdate 分页查询结果接口
 */
export interface CrmLeadPlsUpdatePageResult {
  data: CrmLeadPlsUpdate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLeadPlsUpdate API 响应接口
 */
export interface CrmLeadPlsUpdateResponse {
  success: boolean;
  message: string;
  data?: CrmLeadPlsUpdate | CrmLeadPlsUpdate[] | CrmLeadPlsUpdatePageResult;
  error?: string;
}
