import { MailActivityType } from '../entity/mail/mail.mailactivitytype.entity';

/**
 * MailActivityType 实体接口
 * 对应数据库表: mail_activity_type
 */
export interface MailActivityTypeInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivityType 的参数接口
 */
export interface CreateMailActivityTypeDTO extends Partial<MailActivityTypeInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivityType 的参数接口
 */
export interface UpdateMailActivityTypeDTO extends Partial<MailActivityTypeInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivityType 的参数接口
 */
export interface QueryMailActivityTypeDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityTypeInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivityType 分页查询结果接口
 */
export interface MailActivityTypePageResult {
  data: MailActivityType[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivityType API 响应接口
 */
export interface MailActivityTypeResponse {
  success: boolean;
  message: string;
  data?: MailActivityType | MailActivityType[] | MailActivityTypePageResult;
  error?: string;
}
