import { CrmLostReason } from '../entity/crm/crm.crmlostreason.entity';

/**
 * CrmLostReason 实体接口
 * 对应数据库表: crm_lost_reason
 */
export interface CrmLostReasonInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmLostReason 的参数接口
 */
export interface CreateCrmLostReasonDTO extends Partial<CrmLostReasonInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmLostReason 的参数接口
 */
export interface UpdateCrmLostReasonDTO extends Partial<CrmLostReasonInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmLostReason 的参数接口
 */
export interface QueryCrmLostReasonDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmLostReasonInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmLostReason 分页查询结果接口
 */
export interface CrmLostReasonPageResult {
  data: CrmLostReason[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmLostReason API 响应接口
 */
export interface CrmLostReasonResponse {
  success: boolean;
  message: string;
  data?: CrmLostReason | CrmLostReason[] | CrmLostReasonPageResult;
  error?: string;
}
