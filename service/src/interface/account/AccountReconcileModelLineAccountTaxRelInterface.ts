import { AccountReconcileModelLineAccountTaxRel } from '../entity/account/account.accountreconcilemodellineaccounttaxrel.entity';

/**
 * AccountReconcileModelLineAccountTaxRel 实体接口
 * 对应数据库表: account_reconcile_model_line_account_tax_rel
 */
export interface AccountReconcileModelLineAccountTaxRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountReconcileModelLineAccountTaxRel 的参数接口
 */
export interface CreateAccountReconcileModelLineAccountTaxRelDTO extends Partial<AccountReconcileModelLineAccountTaxRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountReconcileModelLineAccountTaxRel 的参数接口
 */
export interface UpdateAccountReconcileModelLineAccountTaxRelDTO extends Partial<AccountReconcileModelLineAccountTaxRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountReconcileModelLineAccountTaxRel 的参数接口
 */
export interface QueryAccountReconcileModelLineAccountTaxRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountReconcileModelLineAccountTaxRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountReconcileModelLineAccountTaxRel 分页查询结果接口
 */
export interface AccountReconcileModelLineAccountTaxRelPageResult {
  data: AccountReconcileModelLineAccountTaxRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountReconcileModelLineAccountTaxRel API 响应接口
 */
export interface AccountReconcileModelLineAccountTaxRelResponse {
  success: boolean;
  message: string;
  data?: AccountReconcileModelLineAccountTaxRel | AccountReconcileModelLineAccountTaxRel[] | AccountReconcileModelLineAccountTaxRelPageResult;
  error?: string;
}
