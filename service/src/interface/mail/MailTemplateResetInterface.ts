import { MailTemplateReset } from '../entity/mail/mail.mailtemplatereset.entity';

/**
 * MailTemplateReset 实体接口
 * 对应数据库表: mail_template_reset
 */
export interface MailTemplateResetInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailTemplateReset 的参数接口
 */
export interface CreateMailTemplateResetDTO extends Partial<MailTemplateResetInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailTemplateReset 的参数接口
 */
export interface UpdateMailTemplateResetDTO extends Partial<MailTemplateResetInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailTemplateReset 的参数接口
 */
export interface QueryMailTemplateResetDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailTemplateResetInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailTemplateReset 分页查询结果接口
 */
export interface MailTemplateResetPageResult {
  data: MailTemplateReset[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailTemplateReset API 响应接口
 */
export interface MailTemplateResetResponse {
  success: boolean;
  message: string;
  data?: MailTemplateReset | MailTemplateReset[] | MailTemplateResetPageResult;
  error?: string;
}
