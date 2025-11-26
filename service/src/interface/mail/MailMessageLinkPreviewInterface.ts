import { MailMessageLinkPreview } from '../entity/mail/mail.mailmessagelinkpreview.entity';

/**
 * MailMessageLinkPreview 实体接口
 * 对应数据库表: mail_message_link_preview
 */
export interface MailMessageLinkPreviewInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailMessageLinkPreview 的参数接口
 */
export interface CreateMailMessageLinkPreviewDTO extends Partial<MailMessageLinkPreviewInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailMessageLinkPreview 的参数接口
 */
export interface UpdateMailMessageLinkPreviewDTO extends Partial<MailMessageLinkPreviewInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailMessageLinkPreview 的参数接口
 */
export interface QueryMailMessageLinkPreviewDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailMessageLinkPreviewInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailMessageLinkPreview 分页查询结果接口
 */
export interface MailMessageLinkPreviewPageResult {
  data: MailMessageLinkPreview[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailMessageLinkPreview API 响应接口
 */
export interface MailMessageLinkPreviewResponse {
  success: boolean;
  message: string;
  data?: MailMessageLinkPreview | MailMessageLinkPreview[] | MailMessageLinkPreviewPageResult;
  error?: string;
}
