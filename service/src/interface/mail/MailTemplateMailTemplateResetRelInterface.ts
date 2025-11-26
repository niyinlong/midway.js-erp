import { MailTemplateMailTemplateResetRel } from '../entity/mail/mail.mailtemplatemailtemplateresetrel.entity';

/**
 * MailTemplateMailTemplateResetRel 实体接口
 * 对应数据库表: mail_template_mail_template_reset_rel
 */
export interface MailTemplateMailTemplateResetRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailTemplateMailTemplateResetRel 的参数接口
 */
export interface CreateMailTemplateMailTemplateResetRelDTO extends Partial<MailTemplateMailTemplateResetRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailTemplateMailTemplateResetRel 的参数接口
 */
export interface UpdateMailTemplateMailTemplateResetRelDTO extends Partial<MailTemplateMailTemplateResetRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailTemplateMailTemplateResetRel 的参数接口
 */
export interface QueryMailTemplateMailTemplateResetRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailTemplateMailTemplateResetRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailTemplateMailTemplateResetRel 分页查询结果接口
 */
export interface MailTemplateMailTemplateResetRelPageResult {
  data: MailTemplateMailTemplateResetRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailTemplateMailTemplateResetRel API 响应接口
 */
export interface MailTemplateMailTemplateResetRelResponse {
  success: boolean;
  message: string;
  data?: MailTemplateMailTemplateResetRel | MailTemplateMailTemplateResetRel[] | MailTemplateMailTemplateResetRelPageResult;
  error?: string;
}
