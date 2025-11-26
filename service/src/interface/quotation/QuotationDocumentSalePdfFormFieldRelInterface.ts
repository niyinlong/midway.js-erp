import { QuotationDocumentSalePdfFormFieldRel } from '../entity/quotation/quotation.quotationdocumentsalepdfformfieldrel.entity';

/**
 * QuotationDocumentSalePdfFormFieldRel 实体接口
 * 对应数据库表: quotation_document_sale_pdf_form_field_rel
 */
export interface QuotationDocumentSalePdfFormFieldRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 QuotationDocumentSalePdfFormFieldRel 的参数接口
 */
export interface CreateQuotationDocumentSalePdfFormFieldRelDTO extends Partial<QuotationDocumentSalePdfFormFieldRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 QuotationDocumentSalePdfFormFieldRel 的参数接口
 */
export interface UpdateQuotationDocumentSalePdfFormFieldRelDTO extends Partial<QuotationDocumentSalePdfFormFieldRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 QuotationDocumentSalePdfFormFieldRel 的参数接口
 */
export interface QueryQuotationDocumentSalePdfFormFieldRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof QuotationDocumentSalePdfFormFieldRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * QuotationDocumentSalePdfFormFieldRel 分页查询结果接口
 */
export interface QuotationDocumentSalePdfFormFieldRelPageResult {
  data: QuotationDocumentSalePdfFormFieldRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * QuotationDocumentSalePdfFormFieldRel API 响应接口
 */
export interface QuotationDocumentSalePdfFormFieldRelResponse {
  success: boolean;
  message: string;
  data?: QuotationDocumentSalePdfFormFieldRel | QuotationDocumentSalePdfFormFieldRel[] | QuotationDocumentSalePdfFormFieldRelPageResult;
  error?: string;
}
