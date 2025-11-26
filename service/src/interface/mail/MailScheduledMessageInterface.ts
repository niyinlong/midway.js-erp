import { MailScheduledMessage } from '../entity/mail/mail.mailscheduledmessage.entity';

/**
 * MailScheduledMessage 实体接口
 * 对应数据库表: mail_scheduled_message
 */
export interface MailScheduledMessageInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailScheduledMessage 的参数接口
 */
export interface CreateMailScheduledMessageDTO extends Partial<MailScheduledMessageInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailScheduledMessage 的参数接口
 */
export interface UpdateMailScheduledMessageDTO extends Partial<MailScheduledMessageInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailScheduledMessage 的参数接口
 */
export interface QueryMailScheduledMessageDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailScheduledMessageInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailScheduledMessage 分页查询结果接口
 */
export interface MailScheduledMessagePageResult {
  data: MailScheduledMessage[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailScheduledMessage API 响应接口
 */
export interface MailScheduledMessageResponse {
  success: boolean;
  message: string;
  data?: MailScheduledMessage | MailScheduledMessage[] | MailScheduledMessagePageResult;
  error?: string;
}
