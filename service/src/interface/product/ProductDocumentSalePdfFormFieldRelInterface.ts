import { ProductDocumentSalePdfFormFieldRel } from '../entity/product/product.productdocumentsalepdfformfieldrel.entity';

/**
 * ProductDocumentSalePdfFormFieldRel 实体接口
 * 对应数据库表: product_document_sale_pdf_form_field_rel
 */
export interface ProductDocumentSalePdfFormFieldRelInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 ProductDocumentSalePdfFormFieldRel 的参数接口
 */
export interface CreateProductDocumentSalePdfFormFieldRelDTO extends Partial<ProductDocumentSalePdfFormFieldRelInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 ProductDocumentSalePdfFormFieldRel 的参数接口
 */
export interface UpdateProductDocumentSalePdfFormFieldRelDTO extends Partial<ProductDocumentSalePdfFormFieldRelInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 ProductDocumentSalePdfFormFieldRel 的参数接口
 */
export interface QueryProductDocumentSalePdfFormFieldRelDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof ProductDocumentSalePdfFormFieldRelInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * ProductDocumentSalePdfFormFieldRel 分页查询结果接口
 */
export interface ProductDocumentSalePdfFormFieldRelPageResult {
  data: ProductDocumentSalePdfFormFieldRel[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * ProductDocumentSalePdfFormFieldRel API 响应接口
 */
export interface ProductDocumentSalePdfFormFieldRelResponse {
  success: boolean;
  message: string;
  data?: ProductDocumentSalePdfFormFieldRel | ProductDocumentSalePdfFormFieldRel[] | ProductDocumentSalePdfFormFieldRelPageResult;
  error?: string;
}
