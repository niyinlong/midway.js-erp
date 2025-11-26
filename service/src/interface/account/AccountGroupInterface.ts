import { AccountGroup } from '../entity/account/account.accountgroup.entity';

/**
 * AccountGroup 实体接口
 * 对应数据库表: account_group
 */
export interface AccountGroupInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountGroup 的参数接口
 */
export interface CreateAccountGroupDTO extends Partial<AccountGroupInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountGroup 的参数接口
 */
export interface UpdateAccountGroupDTO extends Partial<AccountGroupInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountGroup 的参数接口
 */
export interface QueryAccountGroupDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountGroupInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountGroup 分页查询结果接口
 */
export interface AccountGroupPageResult {
  data: AccountGroup[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountGroup API 响应接口
 */
export interface AccountGroupResponse {
  success: boolean;
  message: string;
  data?: AccountGroup | AccountGroup[] | AccountGroupPageResult;
  error?: string;
}
