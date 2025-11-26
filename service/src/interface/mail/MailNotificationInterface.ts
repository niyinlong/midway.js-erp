import { MailNotification } from '../entity/mail/mail.mailnotification.entity';

/**
 * MailNotification 实体接口
 * 对应数据库表: mail_notification
 */
export interface MailNotificationInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailNotification 的参数接口
 */
export interface CreateMailNotificationDTO extends Partial<MailNotificationInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailNotification 的参数接口
 */
export interface UpdateMailNotificationDTO extends Partial<MailNotificationInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailNotification 的参数接口
 */
export interface QueryMailNotificationDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailNotificationInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailNotification 分页查询结果接口
 */
export interface MailNotificationPageResult {
  data: MailNotification[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailNotification API 响应接口
 */
export interface MailNotificationResponse {
  success: boolean;
  message: string;
  data?: MailNotification | MailNotification[] | MailNotificationPageResult;
  error?: string;
}
