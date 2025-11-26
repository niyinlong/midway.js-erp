import { MailActivityScheduleLine } from '../entity/mail/mail.mailactivityscheduleline.entity';

/**
 * MailActivityScheduleLine 实体接口
 * 对应数据库表: mail_activity_schedule_line
 */
export interface MailActivityScheduleLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivityScheduleLine 的参数接口
 */
export interface CreateMailActivityScheduleLineDTO extends Partial<MailActivityScheduleLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivityScheduleLine 的参数接口
 */
export interface UpdateMailActivityScheduleLineDTO extends Partial<MailActivityScheduleLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivityScheduleLine 的参数接口
 */
export interface QueryMailActivityScheduleLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityScheduleLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivityScheduleLine 分页查询结果接口
 */
export interface MailActivityScheduleLinePageResult {
  data: MailActivityScheduleLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivityScheduleLine API 响应接口
 */
export interface MailActivityScheduleLineResponse {
  success: boolean;
  message: string;
  data?: MailActivityScheduleLine | MailActivityScheduleLine[] | MailActivityScheduleLinePageResult;
  error?: string;
}
