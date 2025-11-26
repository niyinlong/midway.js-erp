import { MailMessageResPartnerRel } from '../entity/mail/mail.mailmessagerespartnerrel.entity';

/**
 * MailMessageResPartnerRel 实体接口
 * 对应数据库表: mail_message_res_partner_rel
 */
export interface MailMessageResPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailMessageResPartnerRel 的参数接口
 */
export interface CreateMailMessageResPartnerRelDTO extends Partial<MailMessageResPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailMessageResPartnerRel 的参数接口
 */
export interface UpdateMailMessageResPartnerRelDTO extends Partial<MailMessageResPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailMessageResPartnerRel 的参数接口
 */
export interface QueryMailMessageResPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailMessageResPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailMessageResPartnerRel 分页查询结果接口
 */
export interface MailMessageResPartnerRelPageResult {
  data: MailMessageResPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailMessageResPartnerRel API 响应接口
 */
export interface MailMessageResPartnerRelResponse {
  success: boolean;
  message: string;
  data?: MailMessageResPartnerRel | MailMessageResPartnerRel[] | MailMessageResPartnerRelPageResult;
  error?: string;
}
