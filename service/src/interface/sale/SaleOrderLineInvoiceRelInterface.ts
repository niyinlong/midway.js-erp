import { SaleOrderLineInvoiceRel } from '../entity/sale/sale.saleorderlineinvoicerel.entity';

/**
 * SaleOrderLineInvoiceRel 实体接口
 * 对应数据库表: sale_order_line_invoice_rel
 */
export interface SaleOrderLineInvoiceRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrderLineInvoiceRel 的参数接口
 */
export interface CreateSaleOrderLineInvoiceRelDTO extends Partial<SaleOrderLineInvoiceRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrderLineInvoiceRel 的参数接口
 */
export interface UpdateSaleOrderLineInvoiceRelDTO extends Partial<SaleOrderLineInvoiceRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrderLineInvoiceRel 的参数接口
 */
export interface QuerySaleOrderLineInvoiceRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderLineInvoiceRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrderLineInvoiceRel 分页查询结果接口
 */
export interface SaleOrderLineInvoiceRelPageResult {
  data: SaleOrderLineInvoiceRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrderLineInvoiceRel API 响应接口
 */
export interface SaleOrderLineInvoiceRelResponse {
  success: boolean;
  message: string;
  data?: SaleOrderLineInvoiceRel | SaleOrderLineInvoiceRel[] | SaleOrderLineInvoiceRelPageResult;
  error?: string;
}
