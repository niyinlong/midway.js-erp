import { MailActivityPlanMailActivityScheduleRel } from '../entity/mail/mail.mailactivityplanmailactivityschedulerel.entity';

/**
 * MailActivityPlanMailActivityScheduleRel 实体接口
 * 对应数据库表: mail_activity_plan_mail_activity_schedule_rel
 */
export interface MailActivityPlanMailActivityScheduleRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivityPlanMailActivityScheduleRel 的参数接口
 */
export interface CreateMailActivityPlanMailActivityScheduleRelDTO extends Partial<MailActivityPlanMailActivityScheduleRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivityPlanMailActivityScheduleRel 的参数接口
 */
export interface UpdateMailActivityPlanMailActivityScheduleRelDTO extends Partial<MailActivityPlanMailActivityScheduleRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivityPlanMailActivityScheduleRel 的参数接口
 */
export interface QueryMailActivityPlanMailActivityScheduleRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityPlanMailActivityScheduleRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivityPlanMailActivityScheduleRel 分页查询结果接口
 */
export interface MailActivityPlanMailActivityScheduleRelPageResult {
  data: MailActivityPlanMailActivityScheduleRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivityPlanMailActivityScheduleRel API 响应接口
 */
export interface MailActivityPlanMailActivityScheduleRelResponse {
  success: boolean;
  message: string;
  data?: MailActivityPlanMailActivityScheduleRel | MailActivityPlanMailActivityScheduleRel[] | MailActivityPlanMailActivityScheduleRelPageResult;
  error?: string;
}
