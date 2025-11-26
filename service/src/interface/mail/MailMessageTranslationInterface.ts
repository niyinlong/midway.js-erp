import { MailMessageTranslation } from '../entity/mail/mail.mailmessagetranslation.entity';

/**
 * MailMessageTranslation 实体接口
 * 对应数据库表: mail_message_translation
 */
export interface MailMessageTranslationInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailMessageTranslation 的参数接口
 */
export interface CreateMailMessageTranslationDTO extends Partial<MailMessageTranslationInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailMessageTranslation 的参数接口
 */
export interface UpdateMailMessageTranslationDTO extends Partial<MailMessageTranslationInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailMessageTranslation 的参数接口
 */
export interface QueryMailMessageTranslationDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailMessageTranslationInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailMessageTranslation 分页查询结果接口
 */
export interface MailMessageTranslationPageResult {
  data: MailMessageTranslation[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailMessageTranslation API 响应接口
 */
export interface MailMessageTranslationResponse {
  success: boolean;
  message: string;
  data?: MailMessageTranslation | MailMessageTranslation[] | MailMessageTranslationPageResult;
  error?: string;
}
