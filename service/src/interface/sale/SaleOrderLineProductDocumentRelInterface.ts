import { SaleOrderLineProductDocumentRel } from '../entity/sale/sale.saleorderlineproductdocumentrel.entity';

/**
 * SaleOrderLineProductDocumentRel 实体接口
 * 对应数据库表: sale_order_line_product_document_rel
 */
export interface SaleOrderLineProductDocumentRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SaleOrderLineProductDocumentRel 的参数接口
 */
export interface CreateSaleOrderLineProductDocumentRelDTO extends Partial<SaleOrderLineProductDocumentRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SaleOrderLineProductDocumentRel 的参数接口
 */
export interface UpdateSaleOrderLineProductDocumentRelDTO extends Partial<SaleOrderLineProductDocumentRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SaleOrderLineProductDocumentRel 的参数接口
 */
export interface QuerySaleOrderLineProductDocumentRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SaleOrderLineProductDocumentRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SaleOrderLineProductDocumentRel 分页查询结果接口
 */
export interface SaleOrderLineProductDocumentRelPageResult {
  data: SaleOrderLineProductDocumentRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SaleOrderLineProductDocumentRel API 响应接口
 */
export interface SaleOrderLineProductDocumentRelResponse {
  success: boolean;
  message: string;
  data?: SaleOrderLineProductDocumentRel | SaleOrderLineProductDocumentRel[] | SaleOrderLineProductDocumentRelPageResult;
  error?: string;
}
