import { CrmRecurringPlan } from '../entity/crm/crm.crmrecurringplan.entity';

/**
 * CrmRecurringPlan 实体接口
 * 对应数据库表: crm_recurring_plan
 */
export interface CrmRecurringPlanInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 CrmRecurringPlan 的参数接口
 */
export interface CreateCrmRecurringPlanDTO extends Partial<CrmRecurringPlanInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 CrmRecurringPlan 的参数接口
 */
export interface UpdateCrmRecurringPlanDTO extends Partial<CrmRecurringPlanInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 CrmRecurringPlan 的参数接口
 */
export interface QueryCrmRecurringPlanDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof CrmRecurringPlanInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * CrmRecurringPlan 分页查询结果接口
 */
export interface CrmRecurringPlanPageResult {
  data: CrmRecurringPlan[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * CrmRecurringPlan API 响应接口
 */
export interface CrmRecurringPlanResponse {
  success: boolean;
  message: string;
  data?: CrmRecurringPlan | CrmRecurringPlan[] | CrmRecurringPlanPageResult;
  error?: string;
}
