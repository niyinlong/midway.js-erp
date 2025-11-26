import { MailMessageSubtype } from '../entity/mail/mail.mailmessagesubtype.entity';

/**
 * MailMessageSubtype 实体接口
 * 对应数据库表: mail_message_subtype
 */
export interface MailMessageSubtypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailMessageSubtype 的参数接口
 */
export interface CreateMailMessageSubtypeDTO extends Partial<MailMessageSubtypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailMessageSubtype 的参数接口
 */
export interface UpdateMailMessageSubtypeDTO extends Partial<MailMessageSubtypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailMessageSubtype 的参数接口
 */
export interface QueryMailMessageSubtypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailMessageSubtypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailMessageSubtype 分页查询结果接口
 */
export interface MailMessageSubtypePageResult {
  data: MailMessageSubtype[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailMessageSubtype API 响应接口
 */
export interface MailMessageSubtypeResponse {
  success: boolean;
  message: string;
  data?: MailMessageSubtype | MailMessageSubtype[] | MailMessageSubtypePageResult;
  error?: string;
}
