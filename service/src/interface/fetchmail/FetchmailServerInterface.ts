import { FetchmailServer } from '../entity/fetchmail/fetchmail.fetchmailserver.entity';

/**
 * FetchmailServer 实体接口
 * 对应数据库表: fetchmail_server
 */
export interface FetchmailServerInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 FetchmailServer 的参数接口
 */
export interface CreateFetchmailServerDTO extends Partial<FetchmailServerInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 FetchmailServer 的参数接口
 */
export interface UpdateFetchmailServerDTO extends Partial<FetchmailServerInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 FetchmailServer 的参数接口
 */
export interface QueryFetchmailServerDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof FetchmailServerInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * FetchmailServer 分页查询结果接口
 */
export interface FetchmailServerPageResult {
  data: FetchmailServer[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * FetchmailServer API 响应接口
 */
export interface FetchmailServerResponse {
  success: boolean;
  message: string;
  data?: FetchmailServer | FetchmailServer[] | FetchmailServerPageResult;
  error?: string;
}
