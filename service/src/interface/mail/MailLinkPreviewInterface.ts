import { MailLinkPreview } from '../entity/mail/mail.maillinkpreview.entity';

/**
 * MailLinkPreview 实体接口
 * 对应数据库表: mail_link_preview
 */
export interface MailLinkPreviewInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailLinkPreview 的参数接口
 */
export interface CreateMailLinkPreviewDTO extends Partial<MailLinkPreviewInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailLinkPreview 的参数接口
 */
export interface UpdateMailLinkPreviewDTO extends Partial<MailLinkPreviewInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailLinkPreview 的参数接口
 */
export interface QueryMailLinkPreviewDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailLinkPreviewInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailLinkPreview 分页查询结果接口
 */
export interface MailLinkPreviewPageResult {
  data: MailLinkPreview[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailLinkPreview API 响应接口
 */
export interface MailLinkPreviewResponse {
  success: boolean;
  message: string;
  data?: MailLinkPreview | MailLinkPreview[] | MailLinkPreviewPageResult;
  error?: string;
}
