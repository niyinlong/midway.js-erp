import { MailMail } from '../entity/mail/mail.mailmail.entity';

/**
 * MailMail 实体接口
 * 对应数据库表: mail_mail
 */
export interface MailMailInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailMail 的参数接口
 */
export interface CreateMailMailDTO extends Partial<MailMailInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailMail 的参数接口
 */
export interface UpdateMailMailDTO extends Partial<MailMailInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailMail 的参数接口
 */
export interface QueryMailMailDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailMailInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailMail 分页查询结果接口
 */
export interface MailMailPageResult {
  data: MailMail[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailMail API 响应接口
 */
export interface MailMailResponse {
  success: boolean;
  message: string;
  data?: MailMail | MailMail[] | MailMailPageResult;
  error?: string;
}
