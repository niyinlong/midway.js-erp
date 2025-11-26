import { MailFollowersEdit } from '../entity/mail/mail.mailfollowersedit.entity';

/**
 * MailFollowersEdit 实体接口
 * 对应数据库表: mail_followers_edit
 */
export interface MailFollowersEditInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailFollowersEdit 的参数接口
 */
export interface CreateMailFollowersEditDTO extends Partial<MailFollowersEditInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailFollowersEdit 的参数接口
 */
export interface UpdateMailFollowersEditDTO extends Partial<MailFollowersEditInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailFollowersEdit 的参数接口
 */
export interface QueryMailFollowersEditDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailFollowersEditInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailFollowersEdit 分页查询结果接口
 */
export interface MailFollowersEditPageResult {
  data: MailFollowersEdit[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailFollowersEdit API 响应接口
 */
export interface MailFollowersEditResponse {
  success: boolean;
  message: string;
  data?: MailFollowersEdit | MailFollowersEdit[] | MailFollowersEditPageResult;
  error?: string;
}
