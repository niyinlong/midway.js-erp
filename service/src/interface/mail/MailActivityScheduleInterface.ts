import { MailActivitySchedule } from '../entity/mail/mail.mailactivityschedule.entity';

/**
 * MailActivitySchedule 实体接口
 * 对应数据库表: mail_activity_schedule
 */
export interface MailActivityScheduleInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivitySchedule 的参数接口
 */
export interface CreateMailActivityScheduleDTO extends Partial<MailActivityScheduleInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivitySchedule 的参数接口
 */
export interface UpdateMailActivityScheduleDTO extends Partial<MailActivityScheduleInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivitySchedule 的参数接口
 */
export interface QueryMailActivityScheduleDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityScheduleInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivitySchedule 分页查询结果接口
 */
export interface MailActivitySchedulePageResult {
  data: MailActivitySchedule[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivitySchedule API 响应接口
 */
export interface MailActivityScheduleResponse {
  success: boolean;
  message: string;
  data?: MailActivitySchedule | MailActivitySchedule[] | MailActivitySchedulePageResult;
  error?: string;
}
