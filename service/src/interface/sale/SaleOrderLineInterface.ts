import { SaleOrderLine } from '../entity/sale/sale.saleorderline.entity';

/**
 * SaleOrderLine 实体接口
 * 对应数据库表: sale_order_line
 */
export interface SaleOrderLineInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrderLine 的参数接口
 */
export interface CreateSaleOrderLineDTO extends Partial<SaleOrderLineInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrderLine 的参数接口
 */
export interface UpdateSaleOrderLineDTO extends Partial<SaleOrderLineInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrderLine 的参数接口
 */
export interface QuerySaleOrderLineDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderLineInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrderLine 分页查询结果接口
 */
export interface SaleOrderLinePageResult {
  data: SaleOrderLine[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrderLine API 响应接口
 */
export interface SaleOrderLineResponse {
  success: boolean;
  message: string;
  data?: SaleOrderLine | SaleOrderLine[] | SaleOrderLinePageResult;
  error?: string;
}
