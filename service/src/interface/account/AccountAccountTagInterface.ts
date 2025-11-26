import { AccountAccountTag } from '../entity/account/account.accountaccounttag.entity';

/**
 * AccountAccountTag 实体接口
 * 对应数据库表: account_account_tag
 */
export interface AccountAccountTagInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAccountTag 的参数接口
 */
export interface CreateAccountAccountTagDTO extends Partial<AccountAccountTagInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAccountTag 的参数接口
 */
export interface UpdateAccountAccountTagDTO extends Partial<AccountAccountTagInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAccountTag 的参数接口
 */
export interface QueryAccountAccountTagDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAccountTagInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAccountTag 分页查询结果接口
 */
export interface AccountAccountTagPageResult {
  data: AccountAccountTag[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAccountTag API 响应接口
 */
export interface AccountAccountTagResponse {
  success: boolean;
  message: string;
  data?: AccountAccountTag | AccountAccountTag[] | AccountAccountTagPageResult;
  error?: string;
}
