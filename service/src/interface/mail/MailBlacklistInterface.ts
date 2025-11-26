import { MailBlacklist } from '../entity/mail/mail.mailblacklist.entity';

/**
 * MailBlacklist 实体接口
 * 对应数据库表: mail_blacklist
 */
export interface MailBlacklistInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailBlacklist 的参数接口
 */
export interface CreateMailBlacklistDTO extends Partial<MailBlacklistInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailBlacklist 的参数接口
 */
export interface UpdateMailBlacklistDTO extends Partial<MailBlacklistInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailBlacklist 的参数接口
 */
export interface QueryMailBlacklistDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailBlacklistInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailBlacklist 分页查询结果接口
 */
export interface MailBlacklistPageResult {
  data: MailBlacklist[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailBlacklist API 响应接口
 */
export interface MailBlacklistResponse {
  success: boolean;
  message: string;
  data?: MailBlacklist | MailBlacklist[] | MailBlacklistPageResult;
  error?: string;
}
