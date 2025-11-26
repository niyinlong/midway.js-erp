import { MailMessageSchedule } from '../entity/mail/mail.mailmessageschedule.entity';

/**
 * MailMessageSchedule 实体接口
 * 对应数据库表: mail_message_schedule
 */
export interface MailMessageScheduleInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailMessageSchedule 的参数接口
 */
export interface CreateMailMessageScheduleDTO extends Partial<MailMessageScheduleInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailMessageSchedule 的参数接口
 */
export interface UpdateMailMessageScheduleDTO extends Partial<MailMessageScheduleInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailMessageSchedule 的参数接口
 */
export interface QueryMailMessageScheduleDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailMessageScheduleInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailMessageSchedule 分页查询结果接口
 */
export interface MailMessageSchedulePageResult {
  data: MailMessageSchedule[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailMessageSchedule API 响应接口
 */
export interface MailMessageScheduleResponse {
  success: boolean;
  message: string;
  data?: MailMessageSchedule | MailMessageSchedule[] | MailMessageSchedulePageResult;
  error?: string;
}
