import { AccountJournalAccountReconcileModelRel } from '../entity/account/account.accountjournalaccountreconcilemodelrel.entity';

/**
 * AccountJournalAccountReconcileModelRel 实体接口
 * 对应数据库表: account_journal_account_reconcile_model_rel
 */
export interface AccountJournalAccountReconcileModelRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountJournalAccountReconcileModelRel 的参数接口
 */
export interface CreateAccountJournalAccountReconcileModelRelDTO extends Partial<AccountJournalAccountReconcileModelRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountJournalAccountReconcileModelRel 的参数接口
 */
export interface UpdateAccountJournalAccountReconcileModelRelDTO extends Partial<AccountJournalAccountReconcileModelRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountJournalAccountReconcileModelRel 的参数接口
 */
export interface QueryAccountJournalAccountReconcileModelRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountJournalAccountReconcileModelRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountJournalAccountReconcileModelRel 分页查询结果接口
 */
export interface AccountJournalAccountReconcileModelRelPageResult {
  data: AccountJournalAccountReconcileModelRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountJournalAccountReconcileModelRel API 响应接口
 */
export interface AccountJournalAccountReconcileModelRelResponse {
  success: boolean;
  message: string;
  data?: AccountJournalAccountReconcileModelRel | AccountJournalAccountReconcileModelRel[] | AccountJournalAccountReconcileModelRelPageResult;
  error?: string;
}
