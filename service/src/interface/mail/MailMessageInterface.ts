import { MailMessage } from '../entity/mail/mail.mailmessage.entity';

/**
 * MailMessage 实体接口
 * 对应数据库表: mail_message
 */
export interface MailMessageInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailMessage 的参数接口
 */
export interface CreateMailMessageDTO extends Partial<MailMessageInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailMessage 的参数接口
 */
export interface UpdateMailMessageDTO extends Partial<MailMessageInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailMessage 的参数接口
 */
export interface QueryMailMessageDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailMessageInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailMessage 分页查询结果接口
 */
export interface MailMessagePageResult {
  data: MailMessage[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailMessage API 响应接口
 */
export interface MailMessageResponse {
  success: boolean;
  message: string;
  data?: MailMessage | MailMessage[] | MailMessagePageResult;
  error?: string;
}
