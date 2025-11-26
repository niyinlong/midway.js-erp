import { MailScheduledMessageResPartnerRel } from '../entity/mail/mail.mailscheduledmessagerespartnerrel.entity';

/**
 * MailScheduledMessageResPartnerRel 实体接口
 * 对应数据库表: mail_scheduled_message_res_partner_rel
 */
export interface MailScheduledMessageResPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailScheduledMessageResPartnerRel 的参数接口
 */
export interface CreateMailScheduledMessageResPartnerRelDTO extends Partial<MailScheduledMessageResPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailScheduledMessageResPartnerRel 的参数接口
 */
export interface UpdateMailScheduledMessageResPartnerRelDTO extends Partial<MailScheduledMessageResPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailScheduledMessageResPartnerRel 的参数接口
 */
export interface QueryMailScheduledMessageResPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailScheduledMessageResPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailScheduledMessageResPartnerRel 分页查询结果接口
 */
export interface MailScheduledMessageResPartnerRelPageResult {
  data: MailScheduledMessageResPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailScheduledMessageResPartnerRel API 响应接口
 */
export interface MailScheduledMessageResPartnerRelResponse {
  success: boolean;
  message: string;
  data?: MailScheduledMessageResPartnerRel | MailScheduledMessageResPartnerRel[] | MailScheduledMessageResPartnerRelPageResult;
  error?: string;
}
