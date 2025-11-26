import { MailActivityTodoCreate } from '../entity/mail/mail.mailactivitytodocreate.entity';

/**
 * MailActivityTodoCreate 实体接口
 * 对应数据库表: mail_activity_todo_create
 */
export interface MailActivityTodoCreateInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailActivityTodoCreate 的参数接口
 */
export interface CreateMailActivityTodoCreateDTO extends Partial<MailActivityTodoCreateInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailActivityTodoCreate 的参数接口
 */
export interface UpdateMailActivityTodoCreateDTO extends Partial<MailActivityTodoCreateInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailActivityTodoCreate 的参数接口
 */
export interface QueryMailActivityTodoCreateDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailActivityTodoCreateInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailActivityTodoCreate 分页查询结果接口
 */
export interface MailActivityTodoCreatePageResult {
  data: MailActivityTodoCreate[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailActivityTodoCreate API 响应接口
 */
export interface MailActivityTodoCreateResponse {
  success: boolean;
  message: string;
  data?: MailActivityTodoCreate | MailActivityTodoCreate[] | MailActivityTodoCreatePageResult;
  error?: string;
}
