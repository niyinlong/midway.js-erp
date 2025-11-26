import { MailActivityPlanTemplateMailActivityTypeRel } from '../entity/mail/mail.mailactivityplantemplatemailactivitytyperel.entity';

/**
 * MailActivityPlanTemplateMailActivityTypeRel 实体接口
 * 对应数据库表: mail_activity_plan_template_mail_activity_type_rel
 */
export interface MailActivityPlanTemplateMailActivityTypeRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivityPlanTemplateMailActivityTypeRel 的参数接口
 */
export interface CreateMailActivityPlanTemplateMailActivityTypeRelDTO extends Partial<MailActivityPlanTemplateMailActivityTypeRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivityPlanTemplateMailActivityTypeRel 的参数接口
 */
export interface UpdateMailActivityPlanTemplateMailActivityTypeRelDTO extends Partial<MailActivityPlanTemplateMailActivityTypeRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivityPlanTemplateMailActivityTypeRel 的参数接口
 */
export interface QueryMailActivityPlanTemplateMailActivityTypeRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityPlanTemplateMailActivityTypeRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivityPlanTemplateMailActivityTypeRel 分页查询结果接口
 */
export interface MailActivityPlanTemplateMailActivityTypeRelPageResult {
  data: MailActivityPlanTemplateMailActivityTypeRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivityPlanTemplateMailActivityTypeRel API 响应接口
 */
export interface MailActivityPlanTemplateMailActivityTypeRelResponse {
  success: boolean;
  message: string;
  data?: MailActivityPlanTemplateMailActivityTypeRel | MailActivityPlanTemplateMailActivityTypeRel[] | MailActivityPlanTemplateMailActivityTypeRelPageResult;
  error?: string;
}
