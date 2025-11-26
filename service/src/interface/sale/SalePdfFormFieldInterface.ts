import { SalePdfFormField } from '../entity/sale/sale.salepdfformfield.entity';

/**
 * SalePdfFormField 实体接口
 * 对应数据库表: sale_pdf_form_field
 */
export interface SalePdfFormFieldInterface {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

/**
 * 创建 SalePdfFormField 的参数接口
 */
export interface CreateSalePdfFormFieldDTO extends Partial<SalePdfFormFieldInterface> {
  // 可以在这里添加创建特定的验证规则
}

/**
 * 更新 SalePdfFormField 的参数接口
 */
export interface UpdateSalePdfFormFieldDTO extends Partial<SalePdfFormFieldInterface> {
  // 可以在这里添加更新特定的验证规则
  // 注意: 通常不允许更新id等主键字段
}

/**
 * 查询 SalePdfFormField 的参数接口
 */
export interface QuerySalePdfFormFieldDTO {
  id?: number | string;
  keyword?: string;
  page?: number;
  pageSize?: number;
  sortBy?: keyof SalePdfFormFieldInterface;
  sortOrder?: 'ASC' | 'DESC';
  // 可以根据实体字段扩展更多查询条件
}

/**
 * SalePdfFormField 分页查询结果接口
 */
export interface SalePdfFormFieldPageResult {
  data: SalePdfFormField[];
  total: number;
  page: number;
  pageSize: number;
  pages: number;
}

/**
 * SalePdfFormField API 响应接口
 */
export interface SalePdfFormFieldResponse {
  success: boolean;
  message: string;
  data?: SalePdfFormField | SalePdfFormField[] | SalePdfFormFieldPageResult;
  error?: string;
}
