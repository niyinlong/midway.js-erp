import { SaleOrderTransactionRel } from '../entity/sale/sale.saleordertransactionrel.entity';

/**
 * SaleOrderTransactionRel 实体接口
 * 对应数据库表: sale_order_transaction_rel
 */
export interface SaleOrderTransactionRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrderTransactionRel 的参数接口
 */
export interface CreateSaleOrderTransactionRelDTO extends Partial<SaleOrderTransactionRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrderTransactionRel 的参数接口
 */
export interface UpdateSaleOrderTransactionRelDTO extends Partial<SaleOrderTransactionRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrderTransactionRel 的参数接口
 */
export interface QuerySaleOrderTransactionRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderTransactionRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrderTransactionRel 分页查询结果接口
 */
export interface SaleOrderTransactionRelPageResult {
  data: SaleOrderTransactionRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrderTransactionRel API 响应接口
 */
export interface SaleOrderTransactionRelResponse {
  success: boolean;
  message: string;
  data?: SaleOrderTransactionRel | SaleOrderTransactionRel[] | SaleOrderTransactionRelPageResult;
  error?: string;
}
