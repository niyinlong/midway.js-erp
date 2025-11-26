import { MailPush } from '../entity/mail/mail.mailpush.entity';

/**
 * MailPush 实体接口
 * 对应数据库表: mail_push
 */
export interface MailPushInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailPush 的参数接口
 */
export interface CreateMailPushDTO extends Partial<MailPushInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailPush 的参数接口
 */
export interface UpdateMailPushDTO extends Partial<MailPushInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailPush 的参数接口
 */
export interface QueryMailPushDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailPushInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailPush 分页查询结果接口
 */
export interface MailPushPageResult {
  data: MailPush[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailPush API 响应接口
 */
export interface MailPushResponse {
  success: boolean;
  message: string;
  data?: MailPush | MailPush[] | MailPushPageResult;
  error?: string;
}
