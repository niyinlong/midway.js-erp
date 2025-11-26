import { MailActivityRel } from '../entity/mail/mail.mailactivityrel.entity';

/**
 * MailActivityRel 实体接口
 * 对应数据库表: mail_activity_rel
 */
export interface MailActivityRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivityRel 的参数接口
 */
export interface CreateMailActivityRelDTO extends Partial<MailActivityRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivityRel 的参数接口
 */
export interface UpdateMailActivityRelDTO extends Partial<MailActivityRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivityRel 的参数接口
 */
export interface QueryMailActivityRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivityRel 分页查询结果接口
 */
export interface MailActivityRelPageResult {
  data: MailActivityRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivityRel API 响应接口
 */
export interface MailActivityRelResponse {
  success: boolean;
  message: string;
  data?: MailActivityRel | MailActivityRel[] | MailActivityRelPageResult;
  error?: string;
}
