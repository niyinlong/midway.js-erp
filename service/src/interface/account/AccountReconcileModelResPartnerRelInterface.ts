import { AccountReconcileModelResPartnerRel } from '../entity/account/account.accountreconcilemodelrespartnerrel.entity';

/**
 * AccountReconcileModelResPartnerRel 实体接口
 * 对应数据库表: account_reconcile_model_res_partner_rel
 */
export interface AccountReconcileModelResPartnerRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountReconcileModelResPartnerRel 的参数接口
 */
export interface CreateAccountReconcileModelResPartnerRelDTO extends Partial<AccountReconcileModelResPartnerRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountReconcileModelResPartnerRel 的参数接口
 */
export interface UpdateAccountReconcileModelResPartnerRelDTO extends Partial<AccountReconcileModelResPartnerRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountReconcileModelResPartnerRel 的参数接口
 */
export interface QueryAccountReconcileModelResPartnerRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountReconcileModelResPartnerRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountReconcileModelResPartnerRel 分页查询结果接口
 */
export interface AccountReconcileModelResPartnerRelPageResult {
  data: AccountReconcileModelResPartnerRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountReconcileModelResPartnerRel API 响应接口
 */
export interface AccountReconcileModelResPartnerRelResponse {
  success: boolean;
  message: string;
  data?: AccountReconcileModelResPartnerRel | AccountReconcileModelResPartnerRel[] | AccountReconcileModelResPartnerRelPageResult;
  error?: string;
}
