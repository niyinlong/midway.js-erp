import { MailComposeMessageIrAttachmentsRel } from '../entity/mail/mail.mailcomposemessageirattachmentsrel.entity';

/**
 * MailComposeMessageIrAttachmentsRel 实体接口
 * 对应数据库表: mail_compose_message_ir_attachments_rel
 */
export interface MailComposeMessageIrAttachmentsRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailComposeMessageIrAttachmentsRel 的参数接口
 */
export interface CreateMailComposeMessageIrAttachmentsRelDTO extends Partial<MailComposeMessageIrAttachmentsRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailComposeMessageIrAttachmentsRel 的参数接口
 */
export interface UpdateMailComposeMessageIrAttachmentsRelDTO extends Partial<MailComposeMessageIrAttachmentsRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailComposeMessageIrAttachmentsRel 的参数接口
 */
export interface QueryMailComposeMessageIrAttachmentsRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailComposeMessageIrAttachmentsRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailComposeMessageIrAttachmentsRel 分页查询结果接口
 */
export interface MailComposeMessageIrAttachmentsRelPageResult {
  data: MailComposeMessageIrAttachmentsRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailComposeMessageIrAttachmentsRel API 响应接口
 */
export interface MailComposeMessageIrAttachmentsRelResponse {
  success: boolean;
  message: string;
  data?: MailComposeMessageIrAttachmentsRel | MailComposeMessageIrAttachmentsRel[] | MailComposeMessageIrAttachmentsRelPageResult;
  error?: string;
}
