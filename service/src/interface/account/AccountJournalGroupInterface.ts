import { AccountJournalGroup } from '../entity/account/account.accountjournalgroup.entity';

/**
 * AccountJournalGroup 实体接口
 * 对应数据库表: account_journal_group
 */
export interface AccountJournalGroupInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountJournalGroup 的参数接口
 */
export interface CreateAccountJournalGroupDTO extends Partial<AccountJournalGroupInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountJournalGroup 的参数接口
 */
export interface UpdateAccountJournalGroupDTO extends Partial<AccountJournalGroupInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountJournalGroup 的参数接口
 */
export interface QueryAccountJournalGroupDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountJournalGroupInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountJournalGroup 分页查询结果接口
 */
export interface AccountJournalGroupPageResult {
  data: AccountJournalGroup[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountJournalGroup API 响应接口
 */
export interface AccountJournalGroupResponse {
  success: boolean;
  message: string;
  data?: AccountJournalGroup | AccountJournalGroup[] | AccountJournalGroupPageResult;
  error?: string;
}
