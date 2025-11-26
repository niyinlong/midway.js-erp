import { MailAlias } from '../entity/mail/mail.mailalias.entity';

/**
 * MailAlias 实体接口
 * 对应数据库表: mail_alias
 */
export interface MailAliasInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 MailAlias 的参数接口
 */
export interface CreateMailAliasDTO extends Partial<MailAliasInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 MailAlias 的参数接口
 */
export interface UpdateMailAliasDTO extends Partial<MailAliasInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 MailAlias 的参数接口
 */
export interface QueryMailAliasDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof MailAliasInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * MailAlias 分页查询结果接口
 */
export interface MailAliasPageResult {
  data: MailAlias[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * MailAlias API 响应接口
 */
export interface MailAliasResponse {
  success: boolean;
  message: string;
  data?: MailAlias | MailAlias[] | MailAliasPageResult;
  error?: string;
}
