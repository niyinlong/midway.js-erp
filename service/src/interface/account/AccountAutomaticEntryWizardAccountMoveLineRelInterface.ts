import { AccountAutomaticEntryWizardAccountMoveLineRel } from '../entity/account/account.accountautomaticentrywizardaccountmovelinerel.entity';

/**
 * AccountAutomaticEntryWizardAccountMoveLineRel 实体接口
 * 对应数据库表: account_automatic_entry_wizard_account_move_line_rel
 */
export interface AccountAutomaticEntryWizardAccountMoveLineRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountAutomaticEntryWizardAccountMoveLineRel 的参数接口
 */
export interface CreateAccountAutomaticEntryWizardAccountMoveLineRelDTO extends Partial<AccountAutomaticEntryWizardAccountMoveLineRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountAutomaticEntryWizardAccountMoveLineRel 的参数接口
 */
export interface UpdateAccountAutomaticEntryWizardAccountMoveLineRelDTO extends Partial<AccountAutomaticEntryWizardAccountMoveLineRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountAutomaticEntryWizardAccountMoveLineRel 的参数接口
 */
export interface QueryAccountAutomaticEntryWizardAccountMoveLineRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountAutomaticEntryWizardAccountMoveLineRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountAutomaticEntryWizardAccountMoveLineRel 分页查询结果接口
 */
export interface AccountAutomaticEntryWizardAccountMoveLineRelPageResult {
  data: AccountAutomaticEntryWizardAccountMoveLineRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountAutomaticEntryWizardAccountMoveLineRel API 响应接口
 */
export interface AccountAutomaticEntryWizardAccountMoveLineRelResponse {
  success: boolean;
  message: string;
  data?: AccountAutomaticEntryWizardAccountMoveLineRel | AccountAutomaticEntryWizardAccountMoveLineRel[] | AccountAutomaticEntryWizardAccountMoveLineRelPageResult;
  error?: string;
}
