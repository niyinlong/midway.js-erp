import { MailActivity } from '../entity/mail/mail.mailactivity.entity';

/**
 * MailActivity 实体接口
 * 对应数据库表: mail_activity
 */
export interface MailActivityInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivity 的参数接口
 */
export interface CreateMailActivityDTO extends Partial<MailActivityInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivity 的参数接口
 */
export interface UpdateMailActivityDTO extends Partial<MailActivityInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivity 的参数接口
 */
export interface QueryMailActivityDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivity 分页查询结果接口
 */
export interface MailActivityPageResult {
  data: MailActivity[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivity API 响应接口
 */
export interface MailActivityResponse {
  success: boolean;
  message: string;
  data?: MailActivity | MailActivity[] | MailActivityPageResult;
  error?: string;
}
