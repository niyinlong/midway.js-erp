import { AccountMovePurchaseOrderRel } from '../entity/account/account.accountmovepurchaseorderrel.entity';

/**
 * AccountMovePurchaseOrderRel 实体接口
 * 对应数据库表: account_move_purchase_order_rel
 */
export interface AccountMovePurchaseOrderRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 AccountMovePurchaseOrderRel 的参数接口
 */
export interface CreateAccountMovePurchaseOrderRelDTO extends Partial<AccountMovePurchaseOrderRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 AccountMovePurchaseOrderRel 的参数接口
 */
export interface UpdateAccountMovePurchaseOrderRelDTO extends Partial<AccountMovePurchaseOrderRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 AccountMovePurchaseOrderRel 的参数接口
 */
export interface QueryAccountMovePurchaseOrderRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof AccountMovePurchaseOrderRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * AccountMovePurchaseOrderRel 分页查询结果接口
 */
export interface AccountMovePurchaseOrderRelPageResult {
  data: AccountMovePurchaseOrderRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * AccountMovePurchaseOrderRel API 响应接口
 */
export interface AccountMovePurchaseOrderRelResponse {
  success: boolean;
  message: string;
  data?: AccountMovePurchaseOrderRel | AccountMovePurchaseOrderRel[] | AccountMovePurchaseOrderRelPageResult;
  error?: string;
}
