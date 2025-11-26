import { MailTemplate } from '../entity/mail/mail.mailtemplate.entity';

/**
 * MailTemplate 实体接口
 * 对应数据库表: mail_template
 */
export interface MailTemplateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailTemplate 的参数接口
 */
export interface CreateMailTemplateDTO extends Partial<MailTemplateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailTemplate 的参数接口
 */
export interface UpdateMailTemplateDTO extends Partial<MailTemplateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailTemplate 的参数接口
 */
export interface QueryMailTemplateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailTemplateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailTemplate 分页查询结果接口
 */
export interface MailTemplatePageResult {
  data: MailTemplate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailTemplate API 响应接口
 */
export interface MailTemplateResponse {
  success: boolean;
  message: string;
  data?: MailTemplate | MailTemplate[] | MailTemplatePageResult;
  error?: string;
}
