import { MailFollowersMailMessageSubtypeRel } from '../entity/mail/mail.mailfollowersmailmessagesubtyperel.entity';

/**
 * MailFollowersMailMessageSubtypeRel 实体接口
 * 对应数据库表: mail_followers_mail_message_subtype_rel
 */
export interface MailFollowersMailMessageSubtypeRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailFollowersMailMessageSubtypeRel 的参数接口
 */
export interface CreateMailFollowersMailMessageSubtypeRelDTO extends Partial<MailFollowersMailMessageSubtypeRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailFollowersMailMessageSubtypeRel 的参数接口
 */
export interface UpdateMailFollowersMailMessageSubtypeRelDTO extends Partial<MailFollowersMailMessageSubtypeRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailFollowersMailMessageSubtypeRel 的参数接口
 */
export interface QueryMailFollowersMailMessageSubtypeRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailFollowersMailMessageSubtypeRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailFollowersMailMessageSubtypeRel 分页查询结果接口
 */
export interface MailFollowersMailMessageSubtypeRelPageResult {
  data: MailFollowersMailMessageSubtypeRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailFollowersMailMessageSubtypeRel API 响应接口
 */
export interface MailFollowersMailMessageSubtypeRelResponse {
  success: boolean;
  message: string;
  data?: MailFollowersMailMessageSubtypeRel | MailFollowersMailMessageSubtypeRel[] | MailFollowersMailMessageSubtypeRelPageResult;
  error?: string;
}
