import { EmailTemplateAttachmentRel } from '../entity/email/email.emailtemplateattachmentrel.entity';

/**
 * EmailTemplateAttachmentRel 实体接口
 * 对应数据库表: email_template_attachment_rel
 */
export interface EmailTemplateAttachmentRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 EmailTemplateAttachmentRel 的参数接口
 */
export interface CreateEmailTemplateAttachmentRelDTO extends Partial<EmailTemplateAttachmentRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 EmailTemplateAttachmentRel 的参数接口
 */
export interface UpdateEmailTemplateAttachmentRelDTO extends Partial<EmailTemplateAttachmentRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 EmailTemplateAttachmentRel 的参数接口
 */
export interface QueryEmailTemplateAttachmentRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof EmailTemplateAttachmentRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * EmailTemplateAttachmentRel 分页查询结果接口
 */
export interface EmailTemplateAttachmentRelPageResult {
  data: EmailTemplateAttachmentRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * EmailTemplateAttachmentRel API 响应接口
 */
export interface EmailTemplateAttachmentRelResponse {
  success: boolean;
  message: string;
  data?: EmailTemplateAttachmentRel | EmailTemplateAttachmentRel[] | EmailTemplateAttachmentRelPageResult;
  error?: string;
}
