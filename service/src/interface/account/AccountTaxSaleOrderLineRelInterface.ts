import { AccountTaxSaleOrderLineRel } from '../entity/account/account.accounttaxsaleorderlinerel.entity';

/**
 * AccountTaxSaleOrderLineRel 实体接口
 * 对应数据库表: account_tax_sale_order_line_rel
 */
export interface AccountTaxSaleOrderLineRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountTaxSaleOrderLineRel 的参数接口
 */
export interface CreateAccountTaxSaleOrderLineRelDTO extends Partial<AccountTaxSaleOrderLineRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountTaxSaleOrderLineRel 的参数接口
 */
export interface UpdateAccountTaxSaleOrderLineRelDTO extends Partial<AccountTaxSaleOrderLineRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountTaxSaleOrderLineRel 的参数接口
 */
export interface QueryAccountTaxSaleOrderLineRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountTaxSaleOrderLineRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountTaxSaleOrderLineRel 分页查询结果接口
 */
export interface AccountTaxSaleOrderLineRelPageResult {
  data: AccountTaxSaleOrderLineRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountTaxSaleOrderLineRel API 响应接口
 */
export interface AccountTaxSaleOrderLineRelResponse {
  success: boolean;
  message: string;
  data?: AccountTaxSaleOrderLineRel | AccountTaxSaleOrderLineRel[] | AccountTaxSaleOrderLineRelPageResult;
  error?: string;
}
