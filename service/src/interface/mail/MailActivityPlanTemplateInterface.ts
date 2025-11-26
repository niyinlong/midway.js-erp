import { MailActivityPlanTemplate } from '../entity/mail/mail.mailactivityplantemplate.entity';

/**
 * MailActivityPlanTemplate 实体接口
 * 对应数据库表: mail_activity_plan_template
 */
export interface MailActivityPlanTemplateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivityPlanTemplate 的参数接口
 */
export interface CreateMailActivityPlanTemplateDTO extends Partial<MailActivityPlanTemplateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivityPlanTemplate 的参数接口
 */
export interface UpdateMailActivityPlanTemplateDTO extends Partial<MailActivityPlanTemplateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivityPlanTemplate 的参数接口
 */
export interface QueryMailActivityPlanTemplateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityPlanTemplateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivityPlanTemplate 分页查询结果接口
 */
export interface MailActivityPlanTemplatePageResult {
  data: MailActivityPlanTemplate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivityPlanTemplate API 响应接口
 */
export interface MailActivityPlanTemplateResponse {
  success: boolean;
  message: string;
  data?: MailActivityPlanTemplate | MailActivityPlanTemplate[] | MailActivityPlanTemplatePageResult;
  error?: string;
}
