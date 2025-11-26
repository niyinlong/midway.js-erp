import { MailMessageReaction } from '../entity/mail/mail.mailmessagereaction.entity';

/**
 * MailMessageReaction 实体接口
 * 对应数据库表: mail_message_reaction
 */
export interface MailMessageReactionInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailMessageReaction 的参数接口
 */
export interface CreateMailMessageReactionDTO extends Partial<MailMessageReactionInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailMessageReaction 的参数接口
 */
export interface UpdateMailMessageReactionDTO extends Partial<MailMessageReactionInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailMessageReaction 的参数接口
 */
export interface QueryMailMessageReactionDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailMessageReactionInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailMessageReaction 分页查询结果接口
 */
export interface MailMessageReactionPageResult {
  data: MailMessageReaction[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailMessageReaction API 响应接口
 */
export interface MailMessageReactionResponse {
  success: boolean;
  message: string;
  data?: MailMessageReaction | MailMessageReaction[] | MailMessageReactionPageResult;
  error?: string;
}
