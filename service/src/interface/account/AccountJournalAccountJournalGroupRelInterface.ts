import { AccountJournalAccountJournalGroupRel } from '../entity/account/account.accountjournalaccountjournalgrouprel.entity';

/**
 * AccountJournalAccountJournalGroupRel 实体接口
 * 对应数据库表: account_journal_account_journal_group_rel
 */
export interface AccountJournalAccountJournalGroupRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountJournalAccountJournalGroupRel 的参数接口
 */
export interface CreateAccountJournalAccountJournalGroupRelDTO extends Partial<AccountJournalAccountJournalGroupRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountJournalAccountJournalGroupRel 的参数接口
 */
export interface UpdateAccountJournalAccountJournalGroupRelDTO extends Partial<AccountJournalAccountJournalGroupRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountJournalAccountJournalGroupRel 的参数接口
 */
export interface QueryAccountJournalAccountJournalGroupRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountJournalAccountJournalGroupRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountJournalAccountJournalGroupRel 分页查询结果接口
 */
export interface AccountJournalAccountJournalGroupRelPageResult {
  data: AccountJournalAccountJournalGroupRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountJournalAccountJournalGroupRel API 响应接口
 */
export interface AccountJournalAccountJournalGroupRelResponse {
  success: boolean;
  message: string;
  data?: AccountJournalAccountJournalGroupRel | AccountJournalAccountJournalGroupRel[] | AccountJournalAccountJournalGroupRelPageResult;
  error?: string;
}
