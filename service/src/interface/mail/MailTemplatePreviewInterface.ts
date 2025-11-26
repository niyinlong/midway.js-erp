import { MailTemplatePreview } from '../entity/mail/mail.mailtemplatepreview.entity';

/**
 * MailTemplatePreview 实体接口
 * 对应数据库表: mail_template_preview
 */
export interface MailTemplatePreviewInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailTemplatePreview 的参数接口
 */
export interface CreateMailTemplatePreviewDTO extends Partial<MailTemplatePreviewInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailTemplatePreview 的参数接口
 */
export interface UpdateMailTemplatePreviewDTO extends Partial<MailTemplatePreviewInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailTemplatePreview 的参数接口
 */
export interface QueryMailTemplatePreviewDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailTemplatePreviewInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailTemplatePreview 分页查询结果接口
 */
export interface MailTemplatePreviewPageResult {
  data: MailTemplatePreview[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailTemplatePreview API 响应接口
 */
export interface MailTemplatePreviewResponse {
  success: boolean;
  message: string;
  data?: MailTemplatePreview | MailTemplatePreview[] | MailTemplatePreviewPageResult;
  error?: string;
}
