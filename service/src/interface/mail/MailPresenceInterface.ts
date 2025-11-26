import { MailPresence } from '../entity/mail/mail.mailpresence.entity';

/**
 * MailPresence 实体接口
 * 对应数据库表: mail_presence
 */
export interface MailPresenceInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailPresence 的参数接口
 */
export interface CreateMailPresenceDTO extends Partial<MailPresenceInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailPresence 的参数接口
 */
export interface UpdateMailPresenceDTO extends Partial<MailPresenceInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailPresence 的参数接口
 */
export interface QueryMailPresenceDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailPresenceInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailPresence 分页查询结果接口
 */
export interface MailPresencePageResult {
  data: MailPresence[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailPresence API 响应接口
 */
export interface MailPresenceResponse {
  success: boolean;
  message: string;
  data?: MailPresence | MailPresence[] | MailPresencePageResult;
  error?: string;
}
