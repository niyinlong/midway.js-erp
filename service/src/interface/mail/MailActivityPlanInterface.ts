import { MailActivityPlan } from '../entity/mail/mail.mailactivityplan.entity';

/**
 * MailActivityPlan 实体接口
 * 对应数据库表: mail_activity_plan
 */
export interface MailActivityPlanInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivityPlan 的参数接口
 */
export interface CreateMailActivityPlanDTO extends Partial<MailActivityPlanInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivityPlan 的参数接口
 */
export interface UpdateMailActivityPlanDTO extends Partial<MailActivityPlanInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivityPlan 的参数接口
 */
export interface QueryMailActivityPlanDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityPlanInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivityPlan 分页查询结果接口
 */
export interface MailActivityPlanPageResult {
  data: MailActivityPlan[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivityPlan API 响应接口
 */
export interface MailActivityPlanResponse {
  success: boolean;
  message: string;
  data?: MailActivityPlan | MailActivityPlan[] | MailActivityPlanPageResult;
  error?: string;
}
