import { AccountTaxPurchaseOrderLineRel } from '../entity/account/account.accounttaxpurchaseorderlinerel.entity';

/**
 * AccountTaxPurchaseOrderLineRel 实体接口
 * 对应数据库表: account_tax_purchase_order_line_rel
 */
export interface AccountTaxPurchaseOrderLineRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountTaxPurchaseOrderLineRel 的参数接口
 */
export interface CreateAccountTaxPurchaseOrderLineRelDTO extends Partial<AccountTaxPurchaseOrderLineRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountTaxPurchaseOrderLineRel 的参数接口
 */
export interface UpdateAccountTaxPurchaseOrderLineRelDTO extends Partial<AccountTaxPurchaseOrderLineRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountTaxPurchaseOrderLineRel 的参数接口
 */
export interface QueryAccountTaxPurchaseOrderLineRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountTaxPurchaseOrderLineRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountTaxPurchaseOrderLineRel 分页查询结果接口
 */
export interface AccountTaxPurchaseOrderLineRelPageResult {
  data: AccountTaxPurchaseOrderLineRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountTaxPurchaseOrderLineRel API 响应接口
 */
export interface AccountTaxPurchaseOrderLineRelResponse {
  success: boolean;
  message: string;
  data?: AccountTaxPurchaseOrderLineRel | AccountTaxPurchaseOrderLineRel[] | AccountTaxPurchaseOrderLineRelPageResult;
  error?: string;
}
