import { SaleOrderDiscount } from '../entity/sale/sale.saleorderdiscount.entity';

/**
 * SaleOrderDiscount 实体接口
 * 对应数据库表: sale_order_discount
 */
export interface SaleOrderDiscountInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrderDiscount 的参数接口
 */
export interface CreateSaleOrderDiscountDTO extends Partial<SaleOrderDiscountInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrderDiscount 的参数接口
 */
export interface UpdateSaleOrderDiscountDTO extends Partial<SaleOrderDiscountInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrderDiscount 的参数接口
 */
export interface QuerySaleOrderDiscountDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderDiscountInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrderDiscount 分页查询结果接口
 */
export interface SaleOrderDiscountPageResult {
  data: SaleOrderDiscount[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrderDiscount API 响应接口
 */
export interface SaleOrderDiscountResponse {
  success: boolean;
  message: string;
  data?: SaleOrderDiscount | SaleOrderDiscount[] | SaleOrderDiscountPageResult;
  error?: string;
}
