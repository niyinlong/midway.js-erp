import { MailFollowers } from '../entity/mail/mail.mailfollowers.entity';

/**
 * MailFollowers 实体接口
 * 对应数据库表: mail_followers
 */
export interface MailFollowersInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailFollowers 的参数接口
 */
export interface CreateMailFollowersDTO extends Partial<MailFollowersInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailFollowers 的参数接口
 */
export interface UpdateMailFollowersDTO extends Partial<MailFollowersInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailFollowers 的参数接口
 */
export interface QueryMailFollowersDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailFollowersInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailFollowers 分页查询结果接口
 */
export interface MailFollowersPageResult {
  data: MailFollowers[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailFollowers API 响应接口
 */
export interface MailFollowersResponse {
  success: boolean;
  message: string;
  data?: MailFollowers | MailFollowers[] | MailFollowersPageResult;
  error?: string;
}
