import { QuotationDocument } from '../entity/quotation/quotation.quotationdocument.entity';

/**
 * QuotationDocument 实体接口
 * 对应数据库表: quotation_document
 */
export interface QuotationDocumentInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 QuotationDocument 的参数接口
 */
export interface CreateQuotationDocumentDTO extends Partial<QuotationDocumentInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 QuotationDocument 的参数接口
 */
export interface UpdateQuotationDocumentDTO extends Partial<QuotationDocumentInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 QuotationDocument 的参数接口
 */
export interface QueryQuotationDocumentDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof QuotationDocumentInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * QuotationDocument 分页查询结果接口
 */
export interface QuotationDocumentPageResult {
  data: QuotationDocument[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * QuotationDocument API 响应接口
 */
export interface QuotationDocumentResponse {
  success: boolean;
  message: string;
  data?: QuotationDocument | QuotationDocument[] | QuotationDocumentPageResult;
  error?: string;
}
