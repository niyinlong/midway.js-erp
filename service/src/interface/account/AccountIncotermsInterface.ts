import { AccountIncoterms } from '../entity/account/account.accountincoterms.entity';

/**
 * AccountIncoterms 实体接口
 * 对应数据库表: account_incoterms
 */
export interface AccountIncotermsInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountIncoterms 的参数接口
 */
export interface CreateAccountIncotermsDTO extends Partial<AccountIncotermsInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountIncoterms 的参数接口
 */
export interface UpdateAccountIncotermsDTO extends Partial<AccountIncotermsInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountIncoterms 的参数接口
 */
export interface QueryAccountIncotermsDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountIncotermsInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountIncoterms 分页查询结果接口
 */
export interface AccountIncotermsPageResult {
  data: AccountIncoterms[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountIncoterms API 响应接口
 */
export interface AccountIncotermsResponse {
  success: boolean;
  message: string;
  data?: AccountIncoterms | AccountIncoterms[] | AccountIncotermsPageResult;
  error?: string;
}
