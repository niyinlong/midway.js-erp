import { MailFollowersEditResPartnerRel } from '../entity/mail/mail.mailfollowerseditrespartnerrel.entity';

/**
 * MailFollowersEditResPartnerRel 实体接口
 * 对应数据库表: mail_followers_edit_res_partner_rel
 */
export interface MailFollowersEditResPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailFollowersEditResPartnerRel 的参数接口
 */
export interface CreateMailFollowersEditResPartnerRelDTO extends Partial<MailFollowersEditResPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailFollowersEditResPartnerRel 的参数接口
 */
export interface UpdateMailFollowersEditResPartnerRelDTO extends Partial<MailFollowersEditResPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailFollowersEditResPartnerRel 的参数接口
 */
export interface QueryMailFollowersEditResPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailFollowersEditResPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailFollowersEditResPartnerRel 分页查询结果接口
 */
export interface MailFollowersEditResPartnerRelPageResult {
  data: MailFollowersEditResPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailFollowersEditResPartnerRel API 响应接口
 */
export interface MailFollowersEditResPartnerRelResponse {
  success: boolean;
  message: string;
  data?: MailFollowersEditResPartnerRel | MailFollowersEditResPartnerRel[] | MailFollowersEditResPartnerRelPageResult;
  error?: string;
}
