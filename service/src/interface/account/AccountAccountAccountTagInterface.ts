import { AccountAccountAccountTag } from '../entity/account/account.accountaccountaccounttag.entity';

/**
 * AccountAccountAccountTag 实体接口
 * 对应数据库表: account_account_account_tag
 */
export interface AccountAccountAccountTagInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAccountAccountTag 的参数接口
 */
export interface CreateAccountAccountAccountTagDTO extends Partial<AccountAccountAccountTagInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAccountAccountTag 的参数接口
 */
export interface UpdateAccountAccountAccountTagDTO extends Partial<AccountAccountAccountTagInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAccountAccountTag 的参数接口
 */
export interface QueryAccountAccountAccountTagDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAccountAccountTagInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAccountAccountTag 分页查询结果接口
 */
export interface AccountAccountAccountTagPageResult {
  data: AccountAccountAccountTag[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAccountAccountTag API 响应接口
 */
export interface AccountAccountAccountTagResponse {
  success: boolean;
  message: string;
  data?: AccountAccountAccountTag | AccountAccountAccountTag[] | AccountAccountAccountTagPageResult;
  error?: string;
}
