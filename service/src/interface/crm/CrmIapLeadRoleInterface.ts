import { CrmIapLeadRole } from '../entity/crm/crm.crmiapleadrole.entity';

/**
 * CrmIapLeadRole 实体接口
 * 对应数据库表: crm_iap_lead_role
 */
export interface CrmIapLeadRoleInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmIapLeadRole 的参数接口
 */
export interface CreateCrmIapLeadRoleDTO extends Partial<CrmIapLeadRoleInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmIapLeadRole 的参数接口
 */
export interface UpdateCrmIapLeadRoleDTO extends Partial<CrmIapLeadRoleInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmIapLeadRole 的参数接口
 */
export interface QueryCrmIapLeadRoleDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmIapLeadRoleInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmIapLeadRole 分页查询结果接口
 */
export interface CrmIapLeadRolePageResult {
  data: CrmIapLeadRole[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmIapLeadRole API 响应接口
 */
export interface CrmIapLeadRoleResponse {
  success: boolean;
  message: string;
  data?: CrmIapLeadRole | CrmIapLeadRole[] | CrmIapLeadRolePageResult;
  error?: string;
}
