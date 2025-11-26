import { MailComposeMessage } from '../entity/mail/mail.mailcomposemessage.entity';

/**
 * MailComposeMessage 实体接口
 * 对应数据库表: mail_compose_message
 */
export interface MailComposeMessageInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailComposeMessage 的参数接口
 */
export interface CreateMailComposeMessageDTO extends Partial<MailComposeMessageInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailComposeMessage 的参数接口
 */
export interface UpdateMailComposeMessageDTO extends Partial<MailComposeMessageInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailComposeMessage 的参数接口
 */
export interface QueryMailComposeMessageDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailComposeMessageInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailComposeMessage 分页查询结果接口
 */
export interface MailComposeMessagePageResult {
  data: MailComposeMessage[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailComposeMessage API 响应接口
 */
export interface MailComposeMessageResponse {
  success: boolean;
  message: string;
  data?: MailComposeMessage | MailComposeMessage[] | MailComposeMessagePageResult;
  error?: string;
}
