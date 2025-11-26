import { QuotationDocumentSaleOrderRel } from '../entity/quotation/quotation.quotationdocumentsaleorderrel.entity';

/**
 * QuotationDocumentSaleOrderRel 实体接口
 * 对应数据库表: quotation_document_sale_order_rel
 */
export interface QuotationDocumentSaleOrderRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 QuotationDocumentSaleOrderRel 的参数接口
 */
export interface CreateQuotationDocumentSaleOrderRelDTO extends Partial<QuotationDocumentSaleOrderRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 QuotationDocumentSaleOrderRel 的参数接口
 */
export interface UpdateQuotationDocumentSaleOrderRelDTO extends Partial<QuotationDocumentSaleOrderRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 QuotationDocumentSaleOrderRel 的参数接口
 */
export interface QueryQuotationDocumentSaleOrderRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof QuotationDocumentSaleOrderRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * QuotationDocumentSaleOrderRel 分页查询结果接口
 */
export interface QuotationDocumentSaleOrderRelPageResult {
  data: QuotationDocumentSaleOrderRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * QuotationDocumentSaleOrderRel API 响应接口
 */
export interface QuotationDocumentSaleOrderRelResponse {
  success: boolean;
  message: string;
  data?: QuotationDocumentSaleOrderRel | QuotationDocumentSaleOrderRel[] | QuotationDocumentSaleOrderRelPageResult;
  error?: string;
}
