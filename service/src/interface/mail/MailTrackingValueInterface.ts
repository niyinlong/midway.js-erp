import { MailTrackingValue } from '../entity/mail/mail.mailtrackingvalue.entity';

/**
 * MailTrackingValue 实体接口
 * 对应数据库表: mail_tracking_value
 */
export interface MailTrackingValueInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailTrackingValue 的参数接口
 */
export interface CreateMailTrackingValueDTO extends Partial<MailTrackingValueInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailTrackingValue 的参数接口
 */
export interface UpdateMailTrackingValueDTO extends Partial<MailTrackingValueInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailTrackingValue 的参数接口
 */
export interface QueryMailTrackingValueDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailTrackingValueInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailTrackingValue 分页查询结果接口
 */
export interface MailTrackingValuePageResult {
  data: MailTrackingValue[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailTrackingValue API 响应接口
 */
export interface MailTrackingValueResponse {
  success: boolean;
  message: string;
  data?: MailTrackingValue | MailTrackingValue[] | MailTrackingValuePageResult;
  error?: string;
}
