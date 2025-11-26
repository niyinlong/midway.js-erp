import { AccountMoveAccountResequenceWizardRel } from '../entity/account/account.accountmoveaccountresequencewizardrel.entity';

/**
 * AccountMoveAccountResequenceWizardRel 实体接口
 * 对应数据库表: account_move_account_resequence_wizard_rel
 */
export interface AccountMoveAccountResequenceWizardRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMoveAccountResequenceWizardRel 的参数接口
 */
export interface CreateAccountMoveAccountResequenceWizardRelDTO extends Partial<AccountMoveAccountResequenceWizardRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMoveAccountResequenceWizardRel 的参数接口
 */
export interface UpdateAccountMoveAccountResequenceWizardRelDTO extends Partial<AccountMoveAccountResequenceWizardRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMoveAccountResequenceWizardRel 的参数接口
 */
export interface QueryAccountMoveAccountResequenceWizardRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMoveAccountResequenceWizardRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMoveAccountResequenceWizardRel 分页查询结果接口
 */
export interface AccountMoveAccountResequenceWizardRelPageResult {
  data: AccountMoveAccountResequenceWizardRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMoveAccountResequenceWizardRel API 响应接口
 */
export interface AccountMoveAccountResequenceWizardRelResponse {
  success: boolean;
  message: string;
  data?: AccountMoveAccountResequenceWizardRel | AccountMoveAccountResequenceWizardRel[] | AccountMoveAccountResequenceWizardRelPageResult;
  error?: string;
}
