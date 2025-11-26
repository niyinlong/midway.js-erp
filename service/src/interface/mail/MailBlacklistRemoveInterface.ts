import { MailBlacklistRemove } from '../entity/mail/mail.mailblacklistremove.entity';

/**
 * MailBlacklistRemove 实体接口
 * 对应数据库表: mail_blacklist_remove
 */
export interface MailBlacklistRemoveInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailBlacklistRemove 的参数接口
 */
export interface CreateMailBlacklistRemoveDTO extends Partial<MailBlacklistRemoveInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailBlacklistRemove 的参数接口
 */
export interface UpdateMailBlacklistRemoveDTO extends Partial<MailBlacklistRemoveInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailBlacklistRemove 的参数接口
 */
export interface QueryMailBlacklistRemoveDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailBlacklistRemoveInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailBlacklistRemove 分页查询结果接口
 */
export interface MailBlacklistRemovePageResult {
  data: MailBlacklistRemove[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailBlacklistRemove API 响应接口
 */
export interface MailBlacklistRemoveResponse {
  success: boolean;
  message: string;
  data?: MailBlacklistRemove | MailBlacklistRemove[] | MailBlacklistRemovePageResult;
  error?: string;
}
