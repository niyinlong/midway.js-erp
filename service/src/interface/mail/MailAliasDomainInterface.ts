import { MailAliasDomain } from '../entity/mail/mail.mailaliasdomain.entity';

/**
 * MailAliasDomain 实体接口
 * 对应数据库表: mail_alias_domain
 */
export interface MailAliasDomainInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailAliasDomain 的参数接口
 */
export interface CreateMailAliasDomainDTO extends Partial<MailAliasDomainInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailAliasDomain 的参数接口
 */
export interface UpdateMailAliasDomainDTO extends Partial<MailAliasDomainInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailAliasDomain 的参数接口
 */
export interface QueryMailAliasDomainDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailAliasDomainInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailAliasDomain 分页查询结果接口
 */
export interface MailAliasDomainPageResult {
  data: MailAliasDomain[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailAliasDomain API 响应接口
 */
export interface MailAliasDomainResponse {
  success: boolean;
  message: string;
  data?: MailAliasDomain | MailAliasDomain[] | MailAliasDomainPageResult;
  error?: string;
}
